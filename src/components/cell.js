import React from 'react'

export const Cell = ({ clicked, cellClicked, number, column, row }) => {
    
    const image = clicked ? "url('/media/images/marked.png')" : "url('/media/images/tile.png')"
    
    return <div 
        className="cell" 
        style={ { backgroundImage: image } } 
        onClick={() => cellClicked(number, column, row)}>{number}</div>
    
}

