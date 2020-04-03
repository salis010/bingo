export const generateNumberBase = () => {
    let numberBase = []

    for(let i = 0; i < 75; i++) {
        numberBase.push( { 
            number: i + 1, 
            drawn: false 
        })
    }
    
    return numberBase
}