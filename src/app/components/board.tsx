'use client';
import React from 'react';
import styles from '../styles/board.module.css';
import {useState} from 'react'; // call from your component to let it “remember” things.

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    // 存放历史记录
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // history末尾就是最新的移动记录；
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        //这是一个 JavaScript 的扩展运算符（spread operator），用于展开数组 history。
        // setHistory,这是将当前的 history 与新的棋盘状态 nextSquares 合并成一个新的数组。
        console.log("nextSaures = ", nextSquares);
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
        console.log(history);
    }

    function jumpTo(nextMove) {
        console.log("jump to ", nextMove);
    }


    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });


    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

/**
 *
 * @param xIsNext 控制下一个元素填啥，
 * @param squares
 * @param onPlay
 * @constructor
 */
function Board({xIsNext, squares, onPlay}) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // 创建一个当前棋盘对象的副本，把X/O赋值到点击的元素
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    // @ts-ignore
    return (
        <>
            <div className={styles.title}>{status}</div>
            <div className={styles.board}>
                {/*add the value prop to each Square component rendered by the Board component*/}
                {squares.map((value, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Square value={squares[index]} onSquareClick={() => handleClick(index)}/>
                ))}
            </div>
        </>

    );
};

// @ts-ignore
function Square({value, onSquareClick}) {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}

/**
 * 遍历二维数组找winner
 * @param squares
 */
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

