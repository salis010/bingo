import React from 'react'
import { DrawnNumbers } from './components/drawnNumbers.js'
import { CardHeader } from './components/cardHeader/index.js'
import { Card } from './components/card/index.js'
import { StartButton } from './components/startButton.js'
import { WinnersBoard } from './components/winnersBoard.js'
import { Competitors } from './components/competitors/index.js'
import { numberSounds } from './components/sounds.js'
import { MusicIcon } from './components/musicIcon.js'
import { generateNumberBase } from './util/generateNumberBase'
import { generateCard } from './util/generateCard'
import { generateCompetitors } from './util/generateCompetitors'
import { markComnpetitorsCard } from './util/markComnpetitorsCard'
import { isWin } from './util/isWin'
import { getRandomNumber }  from './util/getRandomNumber'


export class Bingo extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            numberBase: generateNumberBase(),            
            startButtonDisabled: false,
            card: generateCard(generateNumberBase, getRandomNumber),
            competitors:  generateCompetitors(99),
            drawnNumbers: [],
            winnersLeft: 20,
            winners: [],
            musicOn: true,
            h2Text: 'Your 99 Competitors:'            
        }

        this.firstGame = true
        this.timer                
        this.startButton
        this.beep = new Audio('/media/sound/beep.mp3')
        this.music = new Audio('/media/sound/music.mp3')
        this.music.loop = true
        this.bingo = new Audio('/media/sound/bingo.mp3')
        
        this.startButtonClicked = this.startButtonClicked.bind(this)
        this.initiateGame =this.initiateGame.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.drawNumber = this.drawNumber.bind(this)
        this.cellClicked = this.cellClicked.bind(this)
        this.musicOnOff = this.musicOnOff.bind(this)
    }
    
    initiateGame() {        

        const numberBase = generateNumberBase()        
        const competitors = generateCompetitors(99)       
        const card = generateCard(generateNumberBase, getRandomNumber)           

        this.setState({ 
            numberBase: numberBase, 
            card : card, 
            competitors: competitors, 
            drawnNumbers: [], 
            winnersLeft: 20, 
            winners: [], 
            h2Text: 'Your 99 Competitors:' 
        })
    }

    startButtonClicked() {        
        
        this.music.volume = 0.1

        this.timer = setInterval(this.drawNumber, 3000)                  
        
        this.setState( { startButtonDisabled: true })
                
        if(this.firstGame) 
            this.music.play()                         

        if(!this.firstGame)
            this.initiateGame()
    }

    stopTimer() {
        clearTimeout(this.timer)

        this.setState( { startButtonDisabled: false })

        this.music.volume = 1.0

        this.firstGame = false        
    }

    drawNumber() {                  
        
        let numberBase = this.state.numberBase
        let drawnNumbers = this.state.drawnNumbers
        let validNumber = false
        let number
        let count = 0
        let competitors = this.state.competitors.slice()
        let winnersLeft = this.state.winnersLeft
        let winners = this.state.winners.slice()        

        while(!validNumber && count < numberBase.length) {
            number = getRandomNumber(1, 75)

            if(numberBase[number - 1].drawn === false) {
                numberBase[number - 1].drawn = true
                validNumber = true

                //populate the div above the card showing the last 5 numbers drawn
                if(drawnNumbers.length >= 5)
                    drawnNumbers.pop()
                drawnNumbers.splice(0, 0, number)

                numberSounds[number - 1].play()

                //check for competitor winners
                for(let i = 0; i < competitors.length; i++) {
                    
                    if(!competitors[i].winner) {

                        //mark competitors's cards with newly drawn number                        
                        competitors[i].card = markComnpetitorsCard(competitors[i].card, number)

                        //check if there are any winner competitors
                        if(isWin(competitors[i].card)) {                            
                            competitors[i].winner = true
                            
                            winnersLeft--

                            winners.push((winners.length + 1) + ". " + competitors[i].name[0])
                            this.setState( { winnersLeft: winnersLeft, winners: winners } )

                            this.beep.play()             

                            if(winnersLeft === 0)   {
                                this.stopTimer()
                                break
                            }
                        }
                    }
                }               
            }
            else {
                count++                
            }            
        }
        
        this.setState( { numberBase: numberBase, drawnNumbers: drawnNumbers, competitors: competitors } )                        
        
    }

    cellClicked(number, column, row) {
        
        if(this.state.winnersLeft > 0) {

            let card = this.state.card
            let winnersLeft = this.state.winnersLeft
            let winners = this.state.winners.slice()

            if(this.state.numberBase[number - 1].drawn)
            {
                card[column][row].drawn = true

                if(isWin(this.state.card)) {
                    winnersLeft--
                    winners.push((winners.length + 1) + ". " + "guest")
                    this.stopTimer()
                    this.bingo.play()
                    this.setState( { h2Text: 'Bingo! You Win!!!' } )
                }
                
                this.setState( { card: card, winnersLeft: winnersLeft, winners: winners } )
            }

        }
    }

    
    musicOnOff() {
        const musicOn = !this.state.musicOn
        
        if(musicOn)
        this.music.play()
        else
        this.music.pause()

        this.setState( { musicOn } )
    }

    render () {
 
        return (
            <div className="bingo-global">                
                
                <div className="div-top">
                    <div className="div-game">
                        <DrawnNumbers numbers={this.state.drawnNumbers}/>
                        <CardHeader />
                        <Card card={this.state.card} cellClicked={this.cellClicked}/>
                        <StartButton disabled={this.state.startButtonDisabled} startButtonClicked={this.startButtonClicked}/>
                        <MusicIcon musicOn={this.state.musicOn} musicOnOff={this.musicOnOff} />
                    </div>
                    <WinnersBoard 
                        winnersLeft={this.state.winnersLeft} 
                        winners={this.state.winners}
                    />                    
                </div>

                <Competitors 
                    competitors={this.state.competitors} 
                    text={this.state.h2Text}
                />
                
            </div>
        )
    }
}
