(() => {
  const STORAGE_KEY = "yapper_blog_posts_v1";
  const SUPERADMINS = ["eli@yapper.care"];

    const seedPosts = [
    {
      slug: "2026-global-leaders-dementia-care",
      title: "The 2026 Global Leaders in Dementia Care",
      excerpt:
        "From dementia villages to person-centered models, these facilities show what dignity and daily connection look like in practice.",
      author: "Yapper Team",
      date: "January 26, 2026",
      readTime: "8 min read",
      category: "Industry",
      image: "assets/senior-ageing-better.jpg",
      content:
        "The best dementia-care operators in 2026 have one shared trait: they optimize for daily life, not just risk management. Across regions, leaders are investing in environment design, staff training, and practical connection workflows that keep residents known, not just monitored.",
      featured: true
    },
    {
      slug: "new-era-of-connection",
      title: "A New Era of Connection: Where Every Voice Finds a Friend",
      excerpt:
        "Connection is not a luxury. For older adults living alone, daily conversation is core care infrastructure.",
      author: "Yapper Team",
      date: "January 15, 2026",
      readTime: "5 min read",
      category: "Philosophy",
      image: "assets/senior-patricia-bozan.jpg",
      content:
        "Families do not need another dashboard headline. They need steady connection that actually happens each day. When conversation is consistent, mood improves, follow-up gets easier, and relationships feel less reactive.",
      featured: false
    },
    {
      slug: "loneliness-epidemic-seniors",
      title: "The Loneliness Epidemic: Why Daily Connection Matters for Seniors",
      excerpt:
        "Social disconnection in later life is widespread and fixable. Daily calls are one practical step families can implement immediately.",
      author: "Yapper Team",
      date: "January 8, 2026",
      readTime: "6 min read",
      category: "Connection",
      image: "assets/senior-rotary-phone.jpg",
      content:
        "The issue is not whether families care. The issue is cadence. A reliable daily call gives people structure, keeps conversation channels open, and helps families catch changes before they become crises.",
      featured: false
    },
    {
      slug: "memory-care-conversations",
      title: "How Personalized Conversations Support Seniors with Memory Challenges",
      excerpt:
        "When names, stories, and routines carry forward, conversations become easier and more validating.",
      author: "Yapper Team",
      date: "January 5, 2026",
      readTime: "5 min read",
      category: "Companionship",
      image: "assets/senior-moe-magners.jpg",
      content:
        "Memory-aware conversation reduces friction. Instead of re-establishing context every call, people continue where they left off. That continuity supports dignity and lowers the stress of repeated correction.",
      featured: false
    },
    {
      slug: "ai-companion-vs-human",
      title: "AI Companions: Supplement, Not Replacement",
      excerpt:
        "The real choice is rarely AI versus family. It is usually daily conversation versus long gaps of silence.",
      author: "Yapper Team",
      date: "December 28, 2025",
      readTime: "4 min read",
      category: "Philosophy",
      image: "assets/senior-mart-production.jpg",
      content:
        "Families remain central. AI fills scheduling gaps with consistent, patient calls and useful recaps. The right model strengthens family relationships by reducing anxiety-driven check-ins.",
      featured: false
    },
    {
      slug: "care-facilities-companion-calls",
      title: "How Care Facilities Are Using Companion Calls at Scale",
      excerpt:
        "Facilities are using daily calls as an operational layer for resident engagement and family communication.",
      author: "Yapper Team",
      date: "December 20, 2025",
      readTime: "7 min read",
      category: "For Facilities",
      image: "assets/facilities-hero.jpg",
      content:
        "Teams typically start with one pilot group, define call windows, and route alerts into existing workflows. The most effective deployments are simple: clear ownership, concise recap signals, and practical escalation rules.",
      featured: false
    },
    {
      slug: "signs-parent-lonely",
      title: "5 Signs Your Parent May Be Lonely (And What to Do)",
      excerpt:
        "Subtle behavior changes often appear before someone says they feel alone. Here are practical cues families can watch for.",
      author: "Yapper Team",
      date: "December 15, 2025",
      readTime: "5 min read",
      category: "Family Guide",
      image: "assets/senior-beanie-smartphone.jpg",
      content:
        "Look for withdrawal from routines, flatter affect, and repeated 'I am fine' deflections. Short, concrete daily calls and better prompts can reopen conversation without making your parent feel managed.",
      featured: false
    },
    {
      slug: "power-of-being-remembered",
      title: "The Power of Being Remembered",
      excerpt:
        "People light up when details are remembered. That feeling of being known is a key ingredient of meaningful connection.",
      author: "Yapper Team",
      date: "December 10, 2025",
      readTime: "4 min read",
      category: "Stories",
      image: "assets/senior-video-call.jpg",
      content:
        "Remembered details signal respect. In practice, this means better engagement, deeper conversations, and fewer dropped interactions over time.",
      featured: false
    },
    {
      slug: "why-daily-calls-matter",
      title: "Why Daily Calls Matter More Than Weekly Visits",
      excerpt:
        "Regularity often matters more than duration. Small daily touchpoints create continuity that weekly calls cannot replicate.",
      author: "Yapper Team",
      date: "March 8, 2026",
      readTime: "4 min read",
      category: "Perspective",
      image: "assets/senior-purple-blazer.jpg",
      content:
        "Daily rhythm creates anticipation and makes subtle changes easier to notice. For families with full schedules, consistency is often the highest-leverage improvement.",
      featured: false
    },
    {
      slug: "memory-driven-ai-companions-future-elderly-care",
      title: "Memory Is the Medicine: Why the Future of Elderly Care Is Built on What AI Remembers",
      excerpt:
        "Most eldercare tech plateaus. Memory-driven systems compound because each conversation increases future relevance.",
      author: "Yapper Team",
      date: "March 9, 2026",
      readTime: "4 min read",
      category: "Technology",
      image: "assets/senior-rotary-phone.jpg",
      content:
        "When conversation memory compounds, engagement can rise over time instead of decaying after onboarding. For operators and families, that compounding continuity is the real moat.",
      featured: false
    }
  ];

  function loadPosts() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPosts));
        return [...seedPosts];
      }
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) {
        const merged = [...parsed];
        seedPosts.forEach((seed) => {
          if (!merged.some((p) => p.slug === seed.slug)) merged.push(seed);
        });
        if (merged.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        }
        return merged;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPosts));
      return [...seedPosts];
    } catch (_) {
      return [...seedPosts];
    }
  }

  function savePosts(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  function getPosts() {
    return loadPosts().slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function getPostBySlug(slug) {
    return getPosts().find((p) => p.slug === slug);
  }

  function upsertPost(post) {
    const posts = loadPosts();
    const i = posts.findIndex((p) => p.slug === post.slug);
    if (i >= 0) posts[i] = post;
    else posts.push(post);
    savePosts(posts);
  }

  function deletePost(slug) {
    const posts = loadPosts().filter((p) => p.slug !== slug);
    savePosts(posts);
  }

  window.YapperCMS = {
    superadmins: SUPERADMINS,
    getPosts,
    getPostBySlug,
    upsertPost,
    deletePost
  };
})();
