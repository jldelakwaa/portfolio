'use client';

import { useEffect } from "react";

export default function HideFooter() {
    useEffect(() => {
        // Hide footer
        const footer = document.querySelector('footer');
        if (footer) {
            footer.style.display = 'none';
        }
        
        // Cleanup: show footer again when component unmounts
        return () => {
            if (footer) {
                footer.style.display = '';
            }
        };
    }, []);

    return null;
}