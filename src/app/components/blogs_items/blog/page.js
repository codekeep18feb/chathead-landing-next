// src/app/components/blogs_items/blog/page.js
"use client";

import React, { useMemo, useState } from "react";
import blogSty from "./blogStyle.module.css";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import {
  getPublishedPosts,
  formatDate,
} from "./blogPosts";

const Blog = () => {
  const [query, setQuery] = useState("");

  // ✅ Only published posts (future posts filtered out automatically)
  const publishedPosts = useMemo(() => getPublishedPosts(), []);

  // The banner is the most recent published post
  const featuredPost = publishedPosts[0] || null;

  // Filter by search across title / excerpt / tags / category
  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return publishedPosts;
    return publishedPosts.filter((post) => {
      const haystack = [
        post.title,
        post.excerpt,
        post.category,
        ...(post.tags || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, publishedPosts]);

  // Non-featured posts shown in the "Recent articles" list
  const listPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    const filtered = query.trim()
      ? filteredPosts
      : filteredPosts.filter((post) => post.id !== featuredPost.id);
    return filtered;
  }, [filteredPosts, featuredPost, query]);

  return (
    <div className={blogSty.container}>
      {/* ============ SEARCH ============ */}
      <div className={blogSty.searchWrap}>
        <IoSearch className={blogSty.searchIcon} size={28} />
        <input
          type="text"
          placeholder="Search articles..."
          className={blogSty["input-box"]}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            className={blogSty.clearSearch}
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* ============ FEATURED BANNER ============ */}
      {featuredPost && !query.trim() && (
        <Link
          href={`/blog/${featuredPost.slug}`}
          className={blogSty.banner}
        >
          <img src={featuredPost.image} alt={featuredPost.title} />
          <div className={blogSty.banner_content}>
            {featuredPost.category && (
              <span className={blogSty.bannerCategory}>
                {featuredPost.category}
              </span>
            )}
            <h3>{featuredPost.title}</h3>
            <p className={blogSty.bannerMeta}>
              <span className={blogSty.bannerIc}>
                <span className={blogSty.bannerAvatar}>
                  {featuredPost.author.charAt(0)}
                </span>
                {featuredPost.author}
              </span>

              <span className={blogSty.bannerIc}>
                <FaClock size={16} />
                {featuredPost.readTime}
              </span>

              <span className={blogSty.bannerIc}>
                <FaCalendarAlt size={16} />
                {formatDate(featuredPost.publishedAt)}
              </span>
            </p>
          </div>
        </Link>
      )}

      {/* ============ ARTICLES LIST ============ */}
      <div className={blogSty.articles_wrap}>
        <h1>{query.trim() ? "Search results" : "Recent articles"}</h1>

        {listPosts.length === 0 ? (
          <div className={blogSty.emptyState}>
            <span className={blogSty.emptyIcon}>📭</span>
            <h3>
              {query.trim()
                ? `No articles match "${query}"`
                : "No articles yet"}
            </h3>
            <p>
              {query.trim()
                ? "Try a different search term, or browse all articles."
                : "Check back soon — new articles are on the way."}
            </p>
            {query.trim() && (
              <button
                type="button"
                className={blogSty.emptyResetBtn}
                onClick={() => setQuery("")}
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className={blogSty.articles_content}>
            {listPosts.map((post) => (
              <div key={post.id} className={blogSty.article}>
                <div className={blogSty.article_img}>
                  <Link href={`/blog/${post.slug}`}>
                    <img src={post.image} alt={post.title} />
                  </Link>
                </div>
                <div className={blogSty.text_content}>
                  <p className={blogSty.articleMeta}>
                    <span>{post.readTime}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.author}</span>
                  </p>
                  <h2>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={blogSty.heading}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className={blogSty.description}>
                    {post.excerpt}
                    <Link
                      href={`/blog/${post.slug}`}
                      className={blogSty.readMore}
                    >
                      {" "}
                      read more
                    </Link>
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className={blogSty.tagRow}>
                      {post.tags.map((tag) => (
                        <span key={tag} className={blogSty.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;