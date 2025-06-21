"use client";
import Image from "next/image";
import styles from "./BannerStyle.module.css"; 

export default function BannerSection({
  icon,
  label,
  heading,
  description,
  buttonText,
  buttonAction,
  imageSrc,
  altText = "Banner Image",
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_content}>
        <div className={styles.iconLabel}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{label}</span>
        </div>
        <h3>{heading}</h3>
        <p>{description}</p>
        <button className={styles.demo} onClick={buttonAction}>
          {buttonText}
        </button>
      </div>
      <Image src={imageSrc} alt={altText} width={600} height={400} />
    </div>
  );
}
