import React from "react";

function Reset(props) {
    return <button onClick={() => {
        props.onClick()
    }} className="reset-button" >Reset</button>
}

export default Reset;