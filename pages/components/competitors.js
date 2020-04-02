import React from 'react'
import { CompetitorCard } from './competitorCard'


export const Competitors = ({ competitors, text }) => {
    
    const competitorCards = competitors.map((competitor, i) => 
        <CompetitorCard 
            key={i} 
            competitorCard={competitor.card} 
            competitorName={competitor.name}
        />
    )

    return(
        <div className="competitors-cards">
            <h2>{text}</h2>
            {competitorCards}
        </div>
    )
}
