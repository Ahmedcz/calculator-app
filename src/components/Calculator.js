import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import styles from './Calculator.module.css';

function Calculator() {
 const [displayValue, setDisplayValue ] = useState('');

 const handleButtonClick = (buttonLabel) => {
    let newDisplayValue = displayValue;

    switch(buttonLabel) {
      case 'AC':
        newDisplayValue = '';
      break;

      case '-/+':
        if(newDisplayValue !=='' && newDisplayValue !== '0') {
            newDisplayValue = (parseFloat(newDisplayValue) * -1).toString();
        }
      break;
      
      case'%':
      if(newDisplayValue !== '0' && newDisplayValue !== '') {
        newDisplayValue = (parseFloat(newDisplayValue)/100).toString()
      };
      break;
      
      case '=':
       try {
        newDisplayValue = eval(displayValue).toString();

       }
       catch (error){
        newDisplayValue = 'error';
       }
      break;

      case '+':
        newDisplayValue = (parseFloat(newDisplayValue) + parseFloat(displayValue)).toString();
      break;

      case '-':
        newDisplayValue = (parseFloat(newDisplayValue) - parseFloat(displayValue)).toString();
      break;

      case '*':
        newDisplayValue = (parseFloat(newDisplayValue) * parseFloat(displayValue)).toString() ;
      
      break;
      
      case '/':
        if (newDisplayValue !== '0') {
            newDisplayValue = (parseFloat(newDisplayValue) / parseFloat(displayValue))
        }
        else {
            newDisplayValue = 'Error: Division by 0'
        }
      break;

      case '.':
        if(!newDisplayValue.includes('.')) {
            newDisplayValue +='.';
        }
      break;
    
    default:
        newDisplayValue = displayValue;
    }
 
  setDisplayValue(newDisplayValue);

 }

 return (
  <div className={styles.calculator}>
    <Display value={displayValue}/>

    <div>
        <Button type="number" label="0" onClick={() => handleButtonClick("0")}/>
        <Button type="number" label="1" onClick={() => handleButtonClick("1")}/>
        <Button type="number" label="2" onClick={() => handleButtonClick("2")}/>
        <Button type="number" label="3" onClick={() => handleButtonClick("3")}/>
        <Button type="number" label="4" onClick={() => handleButtonClick("4")}/>
        <Button type="number" label="5" onClick={() => handleButtonClick("5")}/>
        <Button type="number" label="6" onClick={() => handleButtonClick("6")}/>
        <Button type="number" label="7" onClick={() => handleButtonClick("7")}/>
        <Button type="number" label="8" onClick={() => handleButtonClick("8")}/>
        <Button type="number" label="9" onClick={() => handleButtonClick("9")}/>
       

        <Button type="operator" label="." onClick={() => handleButtonClick(".")}/>
        <Button type="operator" label="+" onClick={() => handleButtonClick("+")}/>
        <Button type="operator" label="-" onClick={() => handleButtonClick("-")}/>
        <Button type="operator" label="*" onClick={() => handleButtonClick("*")}/>
        <Button type="operator" label="/" onClick={() => handleButtonClick("/")}/>
        <Button type="operator" label="=" onClick={() => handleButtonClick("=")}/>


        <Button type="special" label="AC" onClick={() => handleButtonClick("AC")}/>
        <Button type="special" label="%" onClick={() => handleButtonClick("%")}/>
        <Button type="special" label="+/-" onClick={() => handleButtonClick("+/-")}/>


    </div>
  </div>

  )

}

export default Calculator;