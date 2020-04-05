import React from 'react'

export const TD = ({ cell }) => {
    const color = cell.drawn === true ? "RGB(176, 28, 28)" : "burlywood"
    
    return <td style={{backgroundColor: color }}>
            {cell.number}
        </td>
}