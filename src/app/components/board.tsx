'use client';
import React from 'react';
import styles from './board.module.css';
import {useState} from 'react'; // call from your component to let it “remember” things.

// @ts-ignore
function Square({value, onSquareClick}) {
    return (
        <button className={styles.cell} onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    //Lifting state into a parent Board component,
    // creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares); // creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
    }


    return (
        <div className={styles.grid}>
            {/*add the value prop to each Square component rendered by the Board component*/}
            {squares.map((value, index) => (
                // eslint-disable-next-line react/jsx-key
                <Square value={squares[index]} onSquareClick={() => handleClick(index)}/>
            ))}
        </div>
    );
};

