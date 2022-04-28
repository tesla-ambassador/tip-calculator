import React from 'react';

function Error(props) {
    return <span className='error'>{props.errorBill} {props.errorPerson}</span>
}

export default Error;