'use client';

import React, { useState, useEffect } from 'react';
import './DisclaimerPopup.css';
import Button from '../Button';

export default function DisclaimerPopup() {
    const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (region === 'IN') {
            const agreed = sessionStorage.getItem('lexvuip_in_disclaimer_agreed');
            if (!agreed) {
                setIsVisible(true);
                document.body.style.overflow = 'hidden';
            }
        }
    }, [region]);

    if (!mounted || !isVisible) return null;

    const handleAgree = () => {
        sessionStorage.setItem('lexvuip_in_disclaimer_agreed', 'true');
        setIsVisible(false);
        document.body.style.overflow = 'auto';
    };

    const handleDecline = () => {
        window.location.href = 'https://www.google.com';
    };

    return (
        <div className="disclaimer-overlay">
            <div className="disclaimer-modal">
                <div className="disclaimer-header">
                    <span className="gold-line"></span>
                    <h2>Disclaimer</h2>
                    <span className="gold-line"></span>
                </div>
                <div className="disclaimer-content">
                    <p>As per the rules of the Bar Council of India, advocates and law firms are prohibited from soliciting work or advertising.</p>
                    <p>By clicking on “I Agree”, the user acknowledges that there has been no advertisement, solicitation, or inducement by our firm. The user is accessing this website voluntarily for informational purposes only.</p>
                    <p>The information available on this website does not constitute legal advice and shall not create any lawyer-client relationship. Any material downloaded or information obtained is entirely at the user’s discretion and volition.</p>
                    <p>By proceeding further, the user accepts the terms of this disclaimer.</p>
                </div>
                <div className="disclaimer-actions">
                    <Button variant="primary" onClick={handleAgree}>Agree and Continue</Button>
                    <Button variant="secondary" className="btn-inverted" onClick={handleDecline}>Decline</Button>
                </div>
            </div>
        </div>
    );
}
