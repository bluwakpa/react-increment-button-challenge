import React from 'react';

export default function IncrementButton(props) {
    return <button onClick={() => props.handleButtonClick}>Increment</button>;
}
