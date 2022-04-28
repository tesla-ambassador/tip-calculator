import React from 'react';
import Reset from './reset';
import Dollar from './dollar';

function Display(props) {

    return (
        <div className='display-parent sub-parent' >
            <div className='head-container'>
                <div className='head-text'>
                    <div>
                    <span className='white-text'>Tip amount</span> <br /> <span className='dark-grayish'>/ person</span>
                    </div>
                    <div className='display-text'>
                        <div>
                            <Dollar fill='#26c0ab' />
                        </div>
                        <h2>{props.amountPerTip}</h2>
                    </div>
                </div>
                <div className='head-text'>
                    <div>
                    <span className='white-text'>Tip amount</span> <br /> <span className='dark-grayish'>/ person</span>
                    </div>
                    <div className='display-text'>
                        <div>
                            <Dollar fill='#26c0ab' />  
                        </div>
                        <h2>{props.totalPerPerson}</h2>
                    </div>
                </div>
            </div>
            <Reset 
                onClick = {() => {
                    props.reset();
                }}
            />
        </div>
    );
}

export default Display;