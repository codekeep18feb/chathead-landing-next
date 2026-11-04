// src/app/components/blogs_items/blog/blogPosts.js

// ─── Publishing rule ───────────────────────────────────────────────
// Any post whose `publishedAt` is in the FUTURE will be hidden from
// /blog and will 404 on /blog/<slug>. When that date arrives, the
// post appears automatically on the next page load. No redeploy.
// ───────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    id: 1,
    slug: "why-restaurant-ai-projects-fail",
    title:
      "Why McDonald's and Starbucks AI Projects Failed — and What Restaurant CRMs Should Learn",
    excerpt:
      "Wendy's viral drive-thru misfires. McDonald's terminating its IBM pilot. Starbucks shelving inventory AI after nine months. Pizza Hut facing a $100M lawsuit. These aren't AI accuracy failures — they're AI execution failures. Here's the architectural difference between AI that ships and AI that gets pulled.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1740&auto=format&fit=crop",
    author: "Sageion Team",
    publishedAt: "2025-09-15T09:00:00Z",
    readTime: "8 min read",
    category: "Industry Analysis",
    tags: ["Restaurant AI", "Case Study", "Deterministic AI"],
  },
  {
    id: 2,
    slug: "fewer-hallucinations-fewer-tokens",
    title:
      "Your Restaurant CRM's AI Doesn't Need More Tokens — It Needs Fewer Hallucinations",
    excerpt:
      "Every Restaurant CRM CTO evaluating AI is worried about one thing: if the AI quotes the wrong price or invents a refund amount, I'm liable. The answer isn't a bigger model. It's a runtime where the LLM classifies intent and your APIs do the work. Zero hallucination in the data path.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    author: "Sageion Team",
    publishedAt: "2025-10-02T09:00:00Z",
    readTime: "7 min read",
    category: "Architecture",
    tags: ["LLM", "Deterministic AI", "API Integration"],
  },
  {
    id: 3,
    slug: "30-second-timeout-killing-restaurant-ai",
    title:
      "The 30-Second Timeout Is Killing Restaurant AI Workflows — Here's What Replaces It",
    excerpt:
      "Supplier syncs take minutes. Payment gateways take 20-40 seconds. Standard chatbots time out at 30 seconds, so a successful sync looks like a failure — and the user retries, creating duplicate POs or duplicate refunds. There's a primitive that fixes this permanently. It's called durable pause/resume.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    author: "Sageion Engineering",
    publishedAt: "2025-10-15T09:00:00Z",
    readTime: "9 min read",
    category: "Engineering Deep-Dive",
    tags: ["Async", "Webhooks", "Durable Workflows"],
  },
  {
    id: 4,
    slug: "attachment-model-70000-restaurants",
    title:
      "The Attachment Model: How to Sell AI to 70,000 Restaurants Without Breaking Multi-Tenancy",
    excerpt:
      "Franchise AI is heating up. Every platform CTO is asking the same question: how do I give each franchisee their own AI without duplicating infrastructure or risking cross-tenant data leaks? The opt-in attachment model is the answer — and it's the difference between a demo and a production deployment.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop",
    author: "Sageion Team",
    publishedAt: "2025-10-28T09:00:00Z",
    readTime: "8 min read",
    category: "Architecture",
    tags: ["Multi-Tenancy", "Franchise", "Enterprise"],
  },
  {
    id: 5,
    slug: "human-in-the-loop-not-a-feature",
    title:
      "Human-in-the-Loop Is Not a Feature — It's the Difference Between AI You Can Sell and AI That Sues You",
    excerpt:
      "The Pizza Hut lawsuit and McDonald's failures both trace back to the same root cause: the AI executed an action without a human confirming it was correct. For Restaurant CRMs selling to franchisees, 'what happens when the AI gets it wrong?' is a deal-breaker. Here's the primitive that answers it.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1740&auto=format&fit=crop",
    author: "Sageion Team",
    publishedAt: "2025-11-04T09:00:00Z",
    readTime: "7 min read",
    category: "Compliance & Risk",
    tags: ["Human-in-the-Loop", "Compliance", "Franchise"],
  },

  // ⭐ NEW — Answers the billing / metering / zero-data question
  {
    id: 6,
    slug: "billing-attribution-without-holding-data",
    title:
      "How to Bill 70,000 Restaurants for AI Usage Without Building a Billing System (or Holding Their Data)",
    excerpt:
      "Every Restaurant CRM CTO asks the same two questions when they evaluate AI add-ons. First: 'How do I bill my franchisees for this?' Second: 'How much of my customers' data does Sageion hold?' The answers are connected — and both come down to a single primitive: a per-execution uid + app_name pair that was engineered for invoice-shaped reporting from day one.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1740&auto=format&fit=crop",
    author: "Sageion Engineering",
    publishedAt: "2025-11-04T10:00:00Z",
    readTime: "9 min read",
    category: "Billing & Architecture",
    tags: ["Billing", "Metering", "Zero-Data", "Enterprise"],
  },
];

// ─── Helpers ───────────────────────────────────────────────────────
// isPublished: true if publishedAt is a valid date <= now
export const isPublished = (post, now = new Date()) => {
  if (!post?.publishedAt) return false;
  const ts = new Date(post.publishedAt).getTime();
  if (Number.isNaN(ts)) return false;
  return ts <= now.getTime();
};

// getPublishedPosts: sorted newest-first, future posts filtered out
export const getPublishedPosts = (now = new Date()) =>
  blogPosts
    .filter((post) => isPublished(post, now))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

// getPostBySlug: returns the post only if already published
export const getPostBySlug = (slug, now = new Date()) =>
  getPublishedPosts(now).find((post) => post.slug === slug) || null;

// formatDate: "Nov 20, 2025"
export const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

export default blogPosts;