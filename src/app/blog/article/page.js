"use client";
import React from 'react'
import articleSty from "./articleStyle.module.css";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Article = () => {
  return (
    <div className={articleSty.container}>
    <div className={articleSty.searchWrap}>
      <IoSearch className={articleSty.searchIcon} size={28} />
      <input
        type="text"
        placeholder="Search articles..."
        className={articleSty["input-box"]}
      />
    </div>

    <div className={articleSty.banner}>
      <img
        src="https://media.licdn.com/dms/image/v2/D5612AQG_V2Dd6m-07Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691073649914?e=2147483647&v=beta&t=q29TzpL-kNYH6djQJ-q53B6YgnX1QoFWR3LxiKcnNMM"
        alt="Chat Solution"
      />
      <div className={articleSty.banner_content}>
        <h3>
          Great Customer Service as a Marketing Strategy: Turning Happy
          Customers into Loyal Advocates
        </h3>
        <p>
          <div className={articleSty.bannerIc}>
            {/* <FaUser size={18} /> */}
            <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" />
            Justyna Polaczyk
          </div>

          <div className={articleSty.bannerIc}>
            <span>
              <FaClock size={18} />
            </span>
            3 min read
          </div>

          <div className={articleSty.bannerIc}>
            <span>
              <FaCalendarAlt size={18} />
            </span>
            Feb 28
          </div>
        </p>
      </div>
    </div>

  </div>
  )
}

export default Article