// src/app/blog/[slug]/page.js
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPosts, getPostBySlug, formatDate } from "../../components/blogs_items/blog/blogPosts";
import ArticleBody from "./ArticleBody";
import styles from "./ArticlePage.module.css";

// Pre-render only currently published posts.
// Future posts 404 until their publish date arrives.
export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found | Sageion Blog" };
  return {
    title: `${post.title} | Sageion Blog`,
    description: post.excerpt?.slice(0, 160) || "",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>

        {post.category && (
          <span className={styles.category}>{post.category}</span>
        )}

        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <span className={styles.avatar}>{post.author.charAt(0)}</span>
            {post.author}
          </span>
          <span className={styles.metaItem}>📖 {post.readTime}</span>
          <span className={styles.metaItem}>
            📅 {formatDate(post.publishedAt)}
          </span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className={styles.heroImage}
        />

        <ArticleBody slug={post.slug} />

        {post.tags && post.tags.length > 0 && (
          <div className={styles.tagRow}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles.cta}>
          <h2>Ready to build AI on your existing APIs?</h2>
          <p>
            Book a demo and we'll walk through the exact workflows for your use
            case — using your own backend, no commitment.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact_us" className={styles.primaryBtn}>
              Book a Demo →
            </Link>
            <Link href="/pricing" className={styles.secondaryBtn}>
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}