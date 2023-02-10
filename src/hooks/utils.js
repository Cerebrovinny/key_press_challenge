import React, { useState, useEffect } from "react";

export const useKeyPress = () => {
    const [keyCode, setKeyCode] = useState(null);

    const handleKeyDown = (event) => {
        setKeyCode(event.keyCode);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return keyCode;
};