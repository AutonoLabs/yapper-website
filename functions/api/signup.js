const ATTIO_BASE = "https://api.attio.com/v2";

const LIST_SLUGS = {
  consumer: "yapper_signups",
  facility: "facility_signups",
};

export async function onRequestPost(ctx) {
  const key = ctx.env.ATTIO_API_KEY;
  if (!key) return json({ ok: false, error: "misconfigured" }, 500);

  let body;
  try {
    body = await ctx.request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const { email, facilityName, type = "consumer", source, referrerUrl } = body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }

  const listSlug = LIST_SLUGS[type] ?? LIST_SLUGS.consumer;
  const headers = {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  // Upsert person by email
  const upsertRes = await fetch(`${ATTIO_BASE}/objects/people/records`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      data: { values: { email_addresses: [{ email_address: email }] } },
      matching_attribute: "email_addresses",
    }),
  });

  if (!upsertRes.ok) {
    const err = await upsertRes.json().catch(() => ({}));
    return json({ ok: false, error: "attio_upsert_failed", detail: err }, 502);
  }

  const person = await upsertRes.json();
  const recordId = person.data?.id?.record_id;
  if (!recordId) return json({ ok: false, error: "no_record_id" }, 502);

  // Build list entry values
  const entryValues = {};
  if (source) entryValues.source = [{ value: source }];
  if (referrerUrl) entryValues.referrer_url = [{ value: referrerUrl }];
  if (type === "facility" && facilityName) {
    entryValues.facility_name = [{ value: facilityName }];
  }

  // Add to list
  const listRes = await fetch(`${ATTIO_BASE}/lists/${listSlug}/entries`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: {
        parent_record_id: recordId,
        parent_object: "people",
        entry_values: entryValues,
      },
    }),
  });

  if (!listRes.ok) {
    const err = await listRes.json().catch(() => ({}));
    // 409 = already in list, treat as success
    if (listRes.status !== 409) {
      return json({ ok: false, error: "attio_list_failed", detail: err }, 502);
    }
  }

  return json({ ok: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
