(() => {
  const cfg = window.YAPPER_GHOST || {};

  function baseUrl() {
    return (cfg.url || "").replace(/\/+$/, "");
  }

  function hasConfig() {
    return Boolean(baseUrl() && cfg.contentKey);
  }

  function mapFilterKey(post) {
    const tagSlugs = (post.tags || []).map((t) => (t.slug || "").toLowerCase());
    if (tagSlugs.some((x) => x.includes("facilit"))) return "facilities";
    if (tagSlugs.some((x) => x.includes("family"))) return "family";
    if (tagSlugs.some((x) => x.includes("research"))) return "research";
    if (tagSlugs.some((x) => x.includes("product") || x.includes("technology"))) return "product";
    return "field";
  }

  function normalize(post) {
    const author = post.primary_author?.name || "Yapper Team";
    const dateText = post.published_at
      ? new Date(post.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || "",
      author,
      date: dateText,
      readTime: `${post.reading_time || 5} min read`,
      category: post.primary_tag?.name || "Insight",
      image: post.feature_image || "assets/senior-patricia-bozan.jpg",
      content: post.html || "",
      featured: Boolean(post.featured),
      filterKey: mapFilterKey(post),
    };
  }

  async function fetchJson(url) {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`Ghost request failed (${res.status})`);
    return res.json();
  }

  async function getPosts(limit = "all") {
    if (!hasConfig()) return [];
    const url = `${baseUrl()}/ghost/api/content/posts/?key=${encodeURIComponent(
      cfg.contentKey
    )}&include=tags,authors&formats=html&limit=${encodeURIComponent(limit)}&order=published_at%20desc`;
    const data = await fetchJson(url);
    return (data.posts || []).map(normalize);
  }

  async function getPostBySlug(slug) {
    if (!hasConfig() || !slug) return null;
    const filter = `slug:${slug}`;
    const url = `${baseUrl()}/ghost/api/content/posts/?key=${encodeURIComponent(
      cfg.contentKey
    )}&include=tags,authors&formats=html&filter=${encodeURIComponent(filter)}&limit=1`;
    const data = await fetchJson(url);
    const post = (data.posts || [])[0];
    return post ? normalize(post) : null;
  }

  window.YapperGhost = {
    hasConfig,
    getPosts,
    getPostBySlug,
    config: cfg,
  };
})();
