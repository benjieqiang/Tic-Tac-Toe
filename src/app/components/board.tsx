'use client';
import React from 'react';
import styles from './board.module.css';
import {useState} from 'react'; // call from your component to let it “remember” things.

// @ts-ignore
function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        // console.log('Button clicked');
        setValue('X');
    };

    return (
        <button className={styles.cell} onClick={handleClick}>
            {value}
        </button>
    );
}

export default function Board() {
    return (
        <div className={styles.grid}>
            {/*add the value prop to each Square component rendered by the Board component*/}
            <Square/>
            <Square/>
            <Square/>

            <Square/>
            <Square/>
            <Square/>

            <Square/>
            <Square/>
            <Square/>
        </div>
    );
};

