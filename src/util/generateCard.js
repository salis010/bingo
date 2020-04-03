import { generateNumberBase } from './generateNumberBase'
import { getRandomNumber } from './getRandomNumber'

export const generateCard = () => {
    let ranges = [ 
        { min: 1, max: 15 }, 
        { min: 16, max: 30 }, 
        { min: 31, max: 45 }, 
        { min: 46, max: 60 }, 
        { min: 61, max: 75 } 
    ]
    let cell
    let card = []
    let column
    let number
    let numberBase = generateNumberBase()
    let validNumber
    
    for(let i = 0; i < ranges.length; i++) {         

        column = []
        number = 0

        for(let j = 0; j < 5; j++) {
            
            validNumber = false

            while(!validNumber) {
                number = getRandomNumber(ranges[i].min, ranges[i].max)
                if(!numberBase[number - 1].drawn)
                {
                    numberBase[number - 1].drawn = true
                    validNumber = true
                }
            }
            
            cell = { number: number, drawn: false }
            column.push(cell)
        }
        card.push(column)
    }
    
    return card
}