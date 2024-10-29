// components/EngagementSection.js
import React from 'react';
import Image from 'next/image';
import deliveryStatus from '../../../public/Asset/delivery_status.svg';
import reply from '../../../public/Asset/reply.svg';
import reaction from '../../../public/Asset/reaction.svg';
import formword from '../../../public/Asset/formword.svg';

const EngagementSection = () => {
  return (
    <section className="engagement-section">
      <h2>Customer Engagement made easy</h2>
      <p>This can help Business to quickly implement a chat solution into their platforms.</p>
      <div className="engagement-content">
        <div className="engagement-item green_bg">
          <p>Reply to specific messages by hovering and clicking the down icon. Keep your conversations organized!</p>
          <Image src={reply} alt="Foreword" />
        </div>
        <div className="engagement-item blue_bg">
          <p>Get real-time updates on your message status. Know when your message is delivered and read!</p>
          <Image src={deliveryStatus} alt="Real-Time Updates" />
        </div>
        <div className="engagement-item green_bg">
          <p>Express yourself instantly with message reactions! Add emojis to share your feelings in real-time!</p>
          <Image src={reaction} alt="Message Reactions" />
        </div>
        <div className="engagement-item blue_bg">
          <p>Easily share messages with others by using the forward option. Keep the conversation flowing!</p>
          <Image src={formword} alt="Forward Messages" />
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
