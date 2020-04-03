import React from 'react'
import { Cell } from './cell'

export const Card = ({ card, cellClicked }) => {
    
    const populateCells = (array, i) =>
        array.map((cell, j) => <Cell 
            key={j} 
            column={i} 
            row={j} 
            number={cell.number} 
            clicked={cell.drawn} 
            cellClicked={cellClicked}
        />)    

    const cells = card.map((column, i) => 
        <div 
            key={i} 
            className="column"
        >
            {populateCells(card[i], i)}
        </div>)

    return (
        <div className="card">
            {cells}
        </div>
    )
}
