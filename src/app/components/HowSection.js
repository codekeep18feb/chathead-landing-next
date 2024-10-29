'use client'

// src/app/components/HowSection.js
import React, { useState } from 'react';

const HowSection = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showDemoPopup, setShowDemoPopup] = useState(false);
    const [demoVersion, setDemoVersion] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleWatchDemoClick = (version) => {
        setDemoVersion(version);
        setShowDemoPopup(true);
    };

    const closePopup = () => {
        setShowDemoPopup(false);
        setDemoVersion(null);
    };

    return (
        <section className="how-section" style={{ display: 'flex' }}>
            {/* Left Side */}
            <div className="left-side" style={{ flex: '1', padding: '20px', borderRight: '1px solid #ccc' }}>
                <h2>Peer to Admin</h2>
                <ul className="peer-list">
                    {['v1', 'v2', 'v3'].map(option => (
                        <li key={option} onClick={() => handleOptionClick(option)}>{option}</li>
                    ))}
                </ul>
            </div>

            {/* Right Side */}
            <div className="right-side" style={{ flex: '1', padding: '20px' }}>
                {selectedOption ? (
                    <VersionContent version={selectedOption} onWatchDemo={handleWatchDemoClick} onBack={() => setSelectedOption(null)} />
                ) : (
                    <DefaultContent />
                )}
            </div>

            {/* Popup Overlay */}
            {showDemoPopup && (
                <div className="overlay" style={overlayStyle}>
                    <div className="popup" style={popupStyle}>
                        <div className="close-btn" onClick={closePopup} style={{ cursor: 'pointer', textAlign: 'right' }}>
                            <i className="bi bi-x" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3>{`Watch Demo for ${demoVersion}`}</h3>
                        <p>{`This is the demo content for ${demoVersion}.`}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

const VersionContent = ({ version, onWatchDemo, onBack }) => (
    <div className="chat-type-wrapper" style={{ display: 'block' }}>
        <div className="back-btn">
            <button onClick={onBack}>
                <i className="bi bi-x"></i>
            </button>
        </div>
        <div className="world-chat">
            <section className="v1_wrapper">
                <h4>{`${version} - CASE1 - If they already have an authentication system in product (JWT) and just want the chat.`}</h4>
                <ContentRows version={version} onWatchDemo={onWatchDemo} />
            </section>
        </div>
    </div>
);

const ContentRows = ({ version, onWatchDemo }) => (
    <>
        <div className="row">
            {['Benefits', 'Provides'].map((title, index) => (
                <ContentCard key={index} title={title} version={version} onWatchDemo={onWatchDemo} />
            ))}
        </div>

        <div className="row">
            {['Steps', 'Examples'].map((title, index) => (
                <ContentCard key={index} title={title} version={version} onWatchDemo={onWatchDemo} />
            ))}
        </div>
    </>
);

const ContentCard = ({ title, version, onWatchDemo }) => {
    const contentData = {
        v1: {
            Benefits: [
                'v1 Lorem Ipsum is simply dummy text of the printing',
                'Lorem Ipsum is simply dummy text of the printing',
                'Lorem Ipsum is simply dummy text of the printing'
            ],
            Provides: [
                'v1 Provides high performance and reliability',
                'Integrates seamlessly with existing systems',
                'User-friendly interface for easy navigation'
            ],
            Steps: [
                'v1 Step 1: Integrate the API',
                'Step 2: Configure settings',
                'Step 3: Launch and monitor'
            ],
            Examples: [
                'v1 Example 1: Real-time messaging',
                'Example 2: Group chats with multiple users',
                'Example 3: Custom emoji support'
            ]
        },
        v2: {
            Benefits: [
                'v2 Lorem Ipsum is advanced text of the printing',
                'Enhanced features for better engagement',
                'Scalable for large user bases'
            ],
            Provides: [
                'v2 Provides analytics and reporting tools',
                'Advanced security protocols in place',
                'Customizable user permissions'
            ],
            Steps: [
                'v2 Step 1: Set up your account',
                'Step 2: Customize your chat experience',
                'Step 3: Utilize the reporting features'
            ],
            Examples: [
                'v2 Example 1: Integrated video calls',
                'Example 2: Multi-channel support',
                'Example 3: AI-driven responses'
            ]
        },
        v3: {
            Benefits: [
                'v3 Lorem Ipsum is the most cutting-edge text of the printing',
                'Provides tools for extensive customization',
                'Offers proactive customer support'
            ],
            Provides: [
                'v3 Provides AI-driven insights for better engagement',
                'Integration with third-party applications',
                'Advanced user segmentation capabilities'
            ],
            Steps: [
                'v3 Step 1: Deploy the chat widget',
                'Step 2: Engage users with personalized messages',
                'Step 3: Review analytics and optimize strategies'
            ],
            Examples: [
                'v3 Example 1: Smart replies based on user behavior',
                'Example 2: Contextual help features',
                'Example 3: Integration with CRM tools'
            ]
        }
    };

    const content = contentData[version][title];

    return (
        <div className="v1_content_card">
            <h5>{title}</h5>
            <ul>
                {content.map((text, index) => (
                    <li key={index}>
                        {text}
                        <img className="icon" src="Asset/arrow.png" alt="icon" />
                    </li>
                ))}
            </ul>
            <button className="read_more_btn" onClick={() => onWatchDemo(version)}>Watch Demo</button>
        </div>
    );
};

const DefaultContent = () => (
    <div className="chat-type-wrapper">
        <div className="back-btn">
            <button>
                <i className="bi bi-x"></i>
            </button>
        </div>
        <div className="world-chat">
            <Section title="Benefits" items={[
                'Start quickly to stay ahead of your competitors.',
                'Free tier pack is enough for small business.',
                'Flexible and most affordable pricing plans.',
                'Hassle-free integration with most types of sites/apps.',
                'Reliable and comes with SLA terms.',
                'Flexibility to choose the correct chat type for your needs.'
            ]} />
            <Section title="Examples" items={[
                'Lorem Ipsum is simply dummy text of the printing.',
                'Lorem Ipsum is simply dummy text of the printing.',
                'Lorem Ipsum is simply dummy text of the printing.',
                'Lorem Ipsum is simply dummy text of the printing.'
            ]} />
            <Section title="For Who" items={[
                'Someone who wants a One-to-One Chat Solution in their product with any of the following cases:',
                'Case 1- Auth - cloud managed',
                'Case 2- Auth - locally managed',
                'Case 3- Auth - not required'
            ]} />
            <Section title="How it Works" items={[
                'Make a tenant account',
                'Login to your Account',
                'Create An App',
                'Choose the right type of chat for your App',
                'Follow the respective integration docs'
            ]} />
            <img src="Asset/globe.png" alt="World Chat" />
        </div>
    </div>
);

const Section = ({ title, items }) => (
    <div className="chat-type-content">
        <h5>{title}</h5>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

// Styles for the overlay and popup
const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const popupStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default HowSection;
