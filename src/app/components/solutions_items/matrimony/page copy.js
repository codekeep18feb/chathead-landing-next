"use client"
import Head from 'next/head';
import { useRef } from 'react';
import matrimonySty from './matrimony.module.css';

export default function Matrimy() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Section references for smooth scrolling
  const sections = {
    'Messaging experience': useRef(null),
    'Voice and video calling': useRef(null),
    'Scale for millions': useRef(null),
    'Moderation control': useRef(null),
    'Monetize chat': useRef(null),
  };

  // Scroll to section function
  const handleScroll = (section) => {
    sections[section]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="container">
      <Head>
        <title>AddChat for Matrimonial</title>
        <meta name="description" content="Seamless, secure messaging for matrimonial platforms" />
      </Head>

      {/* Header Section */}
      <header className="header">
        <h1>AddChat for matrimonial</h1>
        <p>Seamless connections, safer interactions, smarter matches</p>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          {Object.keys(sections).map((tab) => (
            <a key={tab} href="#" onClick={(e) => { 
                e.preventDefault();
                handleScroll(tab);
              }}>
              {tab}
            </a>
          ))}
        </nav>
      </header>

      {/* Section Content Blocks */}
      {Object.entries(sections).map(([section, ref], index) => (
        <section key={section} ref={ref} className="content-section">
          <h2 className="highlighted">{section}</h2>
          <h3>{section} — Features and Details</h3>
          <p>
            {`This is some placeholder content for the ${section} section. 
            Imagine awesome feature descriptions and images here!`}
          </p>
          <div className="image-container">
            <img src={`${basePath}/Asset/banner_img_chat.png`} alt="Chat Solution" />
          </div>
        </section>
      ))}
    </div>
  );
}
