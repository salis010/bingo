export const isWin = card => {
        
    //check columns
    for(let i = 0; i < card.length; i++)
        if(card[i][0].drawn && card[i][1].drawn && card[i][2].drawn && card[i][3].drawn && card[i][4].drawn) {                            
            return true 
        }

    //check rows
    for(let i = 0; i < card[0].length; i++)
        if(card[0][i].drawn && card[1][i].drawn && card[2][i].drawn && card[3][i].drawn && card[4][i].drawn) {
            return true 
        }
    
    //check diagonals    
    if(card[0][0].drawn && card[1][1].drawn && card[2][2].drawn && card[3][3].drawn && card[4][4].drawn) {
        return true
    }

    if(card[0][4].drawn && card[1][3].drawn && card[2][2].drawn && card[3][1].drawn && card[4][0].drawn) {
        return true
    }        
}