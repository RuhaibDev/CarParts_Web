// ScrollReveal.js
import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css'; // Import CSS for styles

const ScrollReveal = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Element is visible
                } else {
                    setIsVisible(false); // Element is not visible
                }
            });
        });

        const currentRef = ref.current; // Store ref.current in a variable

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Use the variable here
            }
        };
    }, []);

    return (
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
