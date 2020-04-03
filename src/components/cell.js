import React from 'react'

export const Cell = ({ clicked, cellClicked, number, column, row }) => {
    
    const image = clicked ? "url('./images/marked.png')" : "url('./images/tile.png')"
    
    return <div 
        className="cell" 
        style={ { backgroundImage: image } } 
        onClick={() => cellClicked(number, column, row)}>{number}</div>
    
}

