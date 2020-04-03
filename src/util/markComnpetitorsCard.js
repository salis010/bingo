export const markComnpetitorsCard = (card, number) => {
        
    let cardCopy = card
    
    for(let i = 0; i < cardCopy.length; i++) {
        for(let j = 0; j < cardCopy[i].length; j++) {
            if(cardCopy[i][j].number === number) {                    
                cardCopy[i][j].drawn = true
            }
        }
    }
    
    return cardCopy        
}