import React from 'react'
import { TD } from './td'

export const Row = ({ competitorCard, rowNumber }) => {

    //read a row from all the columns (element at 'i' from all the array's rows (which in fact are the card's columns))
    let row = []

    for(let i = 0; i < 5; i++) {
        row.push(competitorCard[i][rowNumber])
    }
    
    row = row.map((cell, n) => {
        return <TD key={n} cell={cell} />
    })

    return(
        <tr>{row}</tr>
    )
    
}