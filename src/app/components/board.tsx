import React from 'react';
import styles from './board.module.css';

function Square({ value }) {
    return <button className={styles.cell}>{ value }</button>;
}


export default function Board() {
    return (
        <div className={styles.grid}>
            {/*add the value prop to each Square component rendered by the Board component*/}
            <Square value={1}/>
            <Square value={2}/>
            <Square value={3}/>

            <Square value={4}/>
            <Square value={5}/>
            <Square value={6}/>

            <Square value={7}/>
            <Square value={8}/>
            <Square value={9}/>

        </div>
    );
};
