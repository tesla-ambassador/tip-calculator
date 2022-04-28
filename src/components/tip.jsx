import React, { useState } from 'react';
import Error from './check-error';

function Tip(props) {
    const [bill, setNewBill] = useState('');
    const [custom, setCustom] = useState('');
    const [people, setPeople] = useState('');

    const tips = [5, 10, 15, 25, 50];

    function setTip(e) {
        const customInput = e.target.value;
        setCustom(customInput);
    }

    function setBill(e) {
        const newBill = e.target.value;
        setNewBill(newBill);
        props.resetErrorBill();
    }

    function setNewPeople(e) {
        const newPeople = e.target.value;
        setPeople(newPeople);
        props.resetErrorPerson();
    }

    return (
        <div className='tip-parent sub-parent'>
            <div className="input-container">
                <div className='labels'>
                    <span className='dark-grayish'>Bill</span>
                    <Error 
                        errorBill={props.errorBill}
                    />
                </div>
                <div className="textfield-container">
                    <div className="icons">
                        <img src="/images/icon-dollar.svg" alt="dollar sign" />
                    </div>
                    <input value={bill} onChange={setBill} type="text" placeholder='0' className='text-field right' />
                </div>
            </div>
            <div className="input-container">
                <span className='dark-grayish'>Select Tip %</span>
                <div className="gridItems">
                    {tips.map((tip, index) => {
                        return <button value={tip} key={index} onClick={() => {
                            props.onClick(tip, bill, people);
                        }} className='tip-input' >{tip}%</button>
                    })}
                    <input onChange={setTip} value={custom} placeholder="Custom" type="text" onDoubleClick={() => {
                        props.onClickCustom(custom, bill, people);
                    }} className='right tip-input custom' />
                </div>
            </div>
            <div className='input-container'>
                <div className='labels'>
                    <span className='dark-grayish'>Number of People</span>
                    <Error 
                        errorPerson = {props.errorPerson}
                    />
                </div>
                <div className="textfield-container">
                    <div className="icons">
                        <img src="/images/icon-person.svg" alt="person icon" />
                    </div>
                    <input type="text" onChange={setNewPeople} value={people} placeholder='0' className='text-field right' />
                </div>
            </div>
        </div>
    );
}

export default Tip;