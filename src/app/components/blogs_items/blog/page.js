"use client";
import React from "react";
import blogSty from "./blogStyle.module.css";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import blogPosts from "./blogPosts";

const Blog = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className={blogSty.container}>
      <div className={blogSty.searchWrap}>
        <IoSearch className={blogSty.searchIcon} size={28} />
        <input
          type="text"
          placeholder="Search articles..."
          className={blogSty["input-box"]}
        />
      </div>

      <div className={blogSty.banner}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQG_V2Dd6m-07Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691073649914?e=2147483647&v=beta&t=q29TzpL-kNYH6djQJ-q53B6YgnX1QoFWR3LxiKcnNMM"
          alt="Chat Solution"
        />
        <div className={blogSty.banner_content}>
          <h3>
            Great Customer Service as a Marketing Strategy: Turning Happy
            Customers into Loyal Advocates
          </h3>
          <p>
            <div className={blogSty.bannerIc}>
              {/* <FaUser size={18} /> */}
              <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" />
              Justyna Polaczyk
            </div>

            <div className={blogSty.bannerIc}>
              <span>
                <FaClock size={18} />
              </span>
              3 min read
            </div>

            <div className={blogSty.bannerIc}>
              <span>
                <FaCalendarAlt size={18} />
              </span>
              Feb 28
            </div>
          </p>
        </div>
      </div>

      <div className={blogSty.articles_wrap}>
        <h1>Recent articles</h1>
        <div className={blogSty.articles_content}>
          {blogPosts.map((post) => (
            <div key={post.id} className={blogSty.article}>
              <div className={blogSty.article_img}>
                <img src={post.image} alt="Article thumbnail" />
              </div>
              <div className={blogSty.text_content}>
                <p>
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </p>
                <h2>
                  <Link href={post.link} className={blogSty.heading}>
                    {post.title}
                  </Link>
                </h2>
                <p className={blogSty.description}>
                  {post.excerpt}
                  <Link href={post.link} className={blogSty.readMore}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
