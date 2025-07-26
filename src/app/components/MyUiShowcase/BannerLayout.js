"use client";
import styles from "./BannerLayout.module.css";

const BannerLayout = () => {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.contentOuterDiv}>
        <div className={styles.shapeBox}>
        </div>
      </div>
      <div className={styles.imagesection}>
        <img src="Asset/magicChatImg/p2aImage.png"/>
      </div>
    </div>


  );
};

export default BannerLayout;
