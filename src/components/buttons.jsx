import React from 'react';

function Buttons (props) {
    return <button onClick={props.onClick} value={props.value} style={props.style}>{props.name}</button>

}

export default Buttons;