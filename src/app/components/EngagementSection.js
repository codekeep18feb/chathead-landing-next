import React from 'react';
import Image from 'next/image';
import deliveryStatus from '../../../public/Asset/delivery_status.svg';
import reply from '../../../public/Asset/reply.svg';
import reaction from '../../../public/Asset/reaction.svg';
import formword from '../../../public/Asset/formword.svg';
import styles from './EngagementSection.module.css';

const EngagementSection = () => {
  return (
    <section className={styles['engagement-section']}>
      <h2>Customer Engagement made easy</h2>
      <p>
        Give your users a smooth, modern chat experience that fits right inside your product.
      </p>

      <div className={styles['engagement-content']}>

        <div className={`${styles['engagement-item']} ${styles.green_bg}`}>
          <p>
            Reply directly to any message with quick threaded responses. Keep conversations clean and easy to follow.
          </p>
          <Image src={reply} alt="Reply to messages" />
        </div>

        <div className={`${styles['engagement-item']} ${styles.blue_bg}`}>
          <p>
            See real-time delivery and read receipts. Know exactly when someone has seen or replied to your message.
          </p>
          <Image src={deliveryStatus} alt="Real-Time Updates" />
        </div>

        <div className={`${styles['engagement-item']} ${styles.green_bg}`}>
          <p>
            Express yourself with emoji reactions. Add quick emotions and make conversations feel natural and human.
          </p>
          <Image src={reaction} alt="Message Reactions" />
        </div>

        <div className={`${styles['engagement-item']} ${styles.blue_bg}`}>
          <p>
            Share documents, PDFs, images, and text together in a single message. Perfect for quick and efficient communication.
          </p>
          <Image src={formword} alt="Forward Messages" />
        </div>

      </div>
    </section>
  );
};

export default EngagementSection;
