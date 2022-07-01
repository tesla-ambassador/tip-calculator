import './card.css';
import './display.css'
import Logo from './components/logo';
import Tip from './components/tip';
import Display from './components/display';
import { useState } from 'react';
import Attribution from './components/attribution';

function App() {
const [amountPerTip, setAmountPerTip] = useState('0.00');
const [totalPerPerson, setTotalPerPerson] = useState('0.00');
const [errorBill, setErrorBill] = useState('');
const [errorPerson, setErrorPerson] = useState('');

function computeTip(tip, bill, people) {
  const percentageValue = tip/100;
  const num1 = (percentageValue * bill) / people;
  const tipPerPerson = Math.round(num1 * 100)/100;
  const num2 = (bill / people) + tipPerPerson;
  const totalPerPerson = Math.round(num2 * 100)/100;
  
  if ((!bill || !people) || (bill === '0' || people === '0')) {
    setErrorBill("Can't be zero");
    setErrorPerson("Can't be zero")
    return;
  } else {
    setAmountPerTip(tipPerPerson);
    setTotalPerPerson(totalPerPerson);
  }

}

function computeCustom(custom, bill, people) {
  const percentageValue = custom/100;
  const num1 = (percentageValue * bill) / people;
  const tipPerPerson = Math.round(num1 * 100)/100;
  const num2 = (bill / people) + tipPerPerson;
  const totalPerPerson = Math.round(num2 * 100)/100;

  if ((!bill || !people) || (bill === '0' || people === '0')) {
    setErrorBill("Can't be zero");
    setErrorPerson("Can't be zero")
    return;
  } else {
    setAmountPerTip(tipPerPerson);
    setTotalPerPerson(totalPerPerson);
  }

}

function errorResetBill() {
  setErrorBill('');
}

function errorResetPerson() {
  setErrorPerson('');
}

function resetValues() {
  setAmountPerTip('0.00');
  setTotalPerPerson('0.00');
}

  return (
    <div className='parent'>
      <Logo />
      <div className='main-card'>
        <Tip 
          onClick = {computeTip}
          onClickCustom = {computeCustom}
          errorBill = {errorBill}
          errorPerson = {errorPerson}
          resetErrorBill = {errorResetBill}
          resetErrorPerson = {errorResetPerson}
        />
        <Display 
          amountPerTip = {amountPerTip}
          totalPerPerson = {totalPerPerson}
          reset= {resetValues}
        />
      </div>
      <Attribution 
        target = 'blank'
      />
    </div>
  );
}

export default App;
