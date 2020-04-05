import React, { useState, useEffect } from 'react'
import { HeaderLetter } from './headerLetter'

export const CardHeader = () => {

    return (
        <div className="div-card-header">
            <HeaderLetter source='../images/B.png' />
            <HeaderLetter source='../images/I.png' />
            <HeaderLetter source='../images/N.png' />
            <HeaderLetter source='../images/G.png' />
            <HeaderLetter source='../images/O.png' />
        </div>
    )
}
