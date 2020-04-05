import React from 'react'
import ReactDOM from 'react-dom'
import { Bingo } from './bingo'
import './styles/bingo.css'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(<Bingo />, mountNode)
