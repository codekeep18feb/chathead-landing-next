"use client";

import styles from "./ScrollCards.module.css";
import Card from "./Card";
import GlassCard from "./GlassCard";
import FlipCard from "./FlipCard";

export default function ScrollCards({ cards = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {cards.map((card, index) => (
        //   <Card
        //     key={index}
        //     index={index}
        //     total={cards.length}
        //     {...card}
        //   />

          <GlassCard  key={index} index={index} total={cards.length} {...card}/>
        //   <FlipCard  key={index} index={index} total={cards.length} {...card} />

        ))}
      </div>
    </section>
  );
}