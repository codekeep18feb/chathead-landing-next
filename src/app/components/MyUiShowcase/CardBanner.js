import styles from "./CardBanner.module.css";
import Image from "next/image";

const CardBanner = () => {
  return (
    <div className={styles.cardBanner}>
      <div className={styles.imageWrap}>
        <Image
          src="Asset/banner_img.png" // Place this image in /public
          alt="Banner"
          width={500}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2>Your Product Title</h2>
        <p>Short description about the product or feature being promoted.</p>
        <button className={styles.cta}>Learn More</button>
      </div>
    </div>
  );
};

export default CardBanner;
