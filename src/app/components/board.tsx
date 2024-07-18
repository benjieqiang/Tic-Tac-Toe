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

    // 设置标志位，默认是true，如果上一把
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], // 水平顶部行
            [3, 4, 5], // 水平中部行
            [6, 7, 8], // 水平底部行
            [0, 3, 6], // 垂直左侧列
            [1, 4, 7], // 垂直中间列
            [2, 5, 8], // 垂直右侧列
            [0, 4, 8], // 对角线（左上到右下）
            [2, 4, 6]  // 对角线（右上到左下）
        ];

        for (let i = 0; i < lines.length; i++) {
            //对于每组线条，提取出对应的三个方块索引 a, b, c。
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // 如果找到一条获胜线，返回获胜方的标记（'X' 或 'O'）
                return squares[a];
            }
        }
        return null;
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    function handleClick(i) {
        // not first click square or winner
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O'; // 根据 xIsNext 的值确定下一个方块的符号
        setSquares(nextSquares); // creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
        setXIsNext(!xIsNext); // 切换 xIsNext 的值，确保下一步是另一个玩家，使用 !xIsNext 可以确保 xIsNext 总是取反，无论当前状态是 true 还是 false。这样做可以保证代码在逻辑上更为一致和可预测
    }


    return (
        <>
            <div>{status}</div>
            <div className={styles.grid}>
                {/*add the value prop to each Square component rendered by the Board component*/}
                {squares.map((value, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Square value={squares[index]} onSquareClick={() => handleClick(index)}/>
                ))}
            </div>
        </>

    )
        ;


};

