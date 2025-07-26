import styles from "./CSSAnimatedBanner.module.css";

const CSSAnimatedBanner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.heading}>Welcome to the Future!</h1>
      <p className={styles.subtext}>
        This banner fades and slides in using only CSS.
      </p>
      <button className={styles.cta}>Explore More</button>
    </div>
  );
};

export default CSSAnimatedBanner;
