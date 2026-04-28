const ATTIO_BASE = "https://api.attio.com/v2";

export async function onRequestPost(ctx) {
  const key = ctx.env.ATTIO_API_KEY;
  if (!key) return ok();

  let payload;
  try {
    payload = await ctx.request.json();
  } catch {
    return ok();
  }

  // Only handle new bookings
  if (payload.triggerEvent !== "BOOKING_CREATED") return ok();

  const booking = payload.payload ?? {};
  const attendee = (booking.attendees ?? [])[0] ?? {};
  const email = attendee.email;
  if (!email) return ok();

  const name = attendee.name ?? "";
  const metadata = booking.metadata ?? {};
  const source = metadata.utm_source ?? (metadata.ref ? new URL(metadata.ref).hostname : "cal");
  const referrerUrl = metadata.ref ?? null;
  const facilityName =
    (booking.responses?.facility_name?.value) ??
    (booking.customInputs?.find?.(i => /facility/i.test(i.label))?.value) ??
    null;

  const headers = {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  const nameParts = name.trim().split(/\s+/);
  const personValues = {
    email_addresses: [{ email_address: email }],
  };
  if (nameParts[0]) {
    personValues.name = [{
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" ") || null,
    }];
  }

  const upsertRes = await fetch(`${ATTIO_BASE}/objects/people/records`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      data: { values: personValues },
      matching_attribute: "email_addresses",
    }),
  });

  if (!upsertRes.ok) return ok();

  const person = await upsertRes.json();
  const recordId = person.data?.id?.record_id;
  if (!recordId) return ok();

  const entryValues = {};
  if (source) entryValues.source = [{ value: source }];
  if (referrerUrl) entryValues.referrer_url = [{ value: referrerUrl }];
  if (facilityName) entryValues.facility_name = [{ value: facilityName }];

  await fetch(`${ATTIO_BASE}/lists/facility_signups/entries`, {
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

  return ok();
}

function ok() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
