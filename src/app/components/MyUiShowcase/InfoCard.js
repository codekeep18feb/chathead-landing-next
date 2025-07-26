'use client';
import Image from 'next/image';
import styles from './InfoCard.module.css';

const InfoCard = ({
  imageSrc,
  heading,
  subheading,
  bulletPoints = [],
  buttonText = 'Learn More',
  onButtonClick = () => alert('Button clicked!')
}) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={heading} width={400} height={250} className={styles.image} />
      <div className={styles.content}>
        <h2>{heading}</h2>
        <h4>{subheading}</h4>
        <ul>
          {bulletPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
