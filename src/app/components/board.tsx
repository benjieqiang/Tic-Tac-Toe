import React from 'react';
import styles from './board.module.css';

export default function Board() {
    return (
        <div className={styles.grid}>
            <button className={styles.cell}>1</button>
            <button className={styles.cell}>2</button>
            <button className={styles.cell}>3</button>
            <button className={styles.cell}>4</button>
            <button className={styles.cell}>5</button>
            <button className={styles.cell}>6</button>
            <button className={styles.cell}>7</button>
            <button className={styles.cell}>8</button>
            <button className={styles.cell}>9</button>
        </div>
    );
};

