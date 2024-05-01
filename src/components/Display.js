import React from "react";
import styles from './Display.module.css';

function Display({ value }) {
 
    return (
        <div className={styles.display}>
          <span className={styles.displayValue}>{value}</span>
        </div>
    );

}
export default Display;

