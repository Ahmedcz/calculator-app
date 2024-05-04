import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, label, type}) {

   let buttonStyle = styles.button;

   if(type === 'operator') {
      buttonStyle = styles.operatorButton
   }
   else if(type === 'number') {
    buttonStyle = styles.numberButton;
   }

   else if(type === 'special') {
    buttonStyle = styles.specialButton;
   }
  


   return (

    <div>
        <button className={buttonStyle} onClick={onClick}>{label}</button>
    </div>
   )
}

export default Button;