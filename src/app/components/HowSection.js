'use client'

// src/app/components/HowSection.js
import React, { useEffect } from 'react';

const HowSection = () => {
    useEffect(() => {
        const peerAdmin = document.querySelector(".peer_list .toggle");
        const sublist = document.querySelector(".peer_list_sublist");
        const chatWrapper = document.querySelector(".chat-type-wrapper");
        const backButton = document.querySelector(".back-btn button");

        // Event handlers and additional logic here...
    }, []);

    return (
        <section className="how-section">
            {/* ... content ... */}
        </section>
    );
};

export default HowSection;
