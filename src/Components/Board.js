import React from 'react';
import Square from './Box'

function Box({ squares, onClick }) {
    return (
        <div className='box'>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Box
