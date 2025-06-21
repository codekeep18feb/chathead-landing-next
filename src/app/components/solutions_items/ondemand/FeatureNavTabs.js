import styles from "./FeatureStyle.module.css";

export default function FeatureNavTabs({ tabs, onTabClick }) {
  return (
    <nav className={styles.navTabs}>
      {tabs.map((tab) => (
        <a
          key={tab}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onTabClick(tab);
          }}
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}
