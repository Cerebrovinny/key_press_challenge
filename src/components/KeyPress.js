import React, { useState, useEffect } from 'react';
import { useKeyPress } from '../hooks/utils';

const KeyPress = () => {
    const keyCode = useKeyPress();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (keyCode === 77) {
            setMessage("The M key was pressed");
        } else if (keyCode === 67) {
            setMessage("The C key was pressed");
        } else if (keyCode === 13) {
            setMessage("The Enter key was pressed");
        } else {
            setMessage("");
        }
    }, [keyCode]);

    return (
        <div className="container">
            <h1>Key Press</h1>
            <div className="message-container">
                <p className="">Press the M, C, or Enter keys</p>
                <p className="message">{message}</p>
            </div>
        </div>
    );
};

export default KeyPress;
