import React, { useState } from 'react';
import { calculateWinner } from '../helper'
import Board from './Board';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[step]);
    const xo = xIsNext ? 'X' : 'O';

    const onClick = (i) => {
        const historyPoint = history.slice(0, step + 1)
        const current = historyPoint[step];
        const squares = [...current]

        //return if won or occupied
        if (winner || squares[i]) {
            return;
        }

        //select square
        squares[i] = xo
        setHistory([...historyPoint, squares]);
        setStep(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (move) => {
        setStep(move)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () => {
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
                <li key={move} >
                    <button onClick={() => jumpTo(move)} >{destination}</button>
                </li>
            )
        })
    }

    return (
        <>
            <h1>React T with hooks</h1>
            <h3>{winner ? 'Winner: ' + winner : 'Next player: ' + xo}</h3>
            <Board squares={history[step]} onClick={onClick} />
            <div className='info-container'>
                <div>
                    <h1>History</h1>
                    {renderMoves()}
                </div>
            </div>
        </>
    );
}

export default Game;
