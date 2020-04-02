import React from 'react'
import { Row } from './row'


export const CompetitorCard = ({ competitorName, competitorCard }) => 
    <table className='competitor-card'>            
        <caption>{competitorName}</caption>
        <Row rowNumber={0} competitorCard={competitorCard}/>
        <Row rowNumber={1} competitorCard={competitorCard}/>
        <Row rowNumber={2} competitorCard={competitorCard}/>
        <Row rowNumber={3} competitorCard={competitorCard}/>
        <Row rowNumber={4} competitorCard={competitorCard}/>
    </table>