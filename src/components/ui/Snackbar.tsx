"use client";

import React, { useEffect, useState } from "react";

export default function Snackbar({ message, onClose, duration, type }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
        <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${backgroundColor} text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
        >
            {message}
        </div>
    );
}
