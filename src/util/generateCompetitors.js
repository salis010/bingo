import { getRandomNumber } from './getRandomNumber'
import { generateCard } from './generateCard'

export const generateCompetitors = n => {
    
    const names = ['ivanhoe', 'igor', 'shrekked', 'drusilla', 'ely_mix', 'regolina', 'xbajt', 'fulvio', 'eel_the_reel', 'tumblr98', 'satan', 'veggieRod', 'danielaD', 'Frank_Relax', 'S-thief-in', 'smith87', 'michelle', 'izadora', 'lara15', 'luke13', 'aidan10', 'venere', 'goan', 'sloan', 'rileyR', 'hessem', 'rodorigo', 'gabirella', 'steve_deggie', 'reine', 'kabban', 'ebejer78', 'hoxna_wisq', 'pavarotti', 'shake_spear', 'michelangelo', 'rondo', 'julia', 'marika', 'veronica', 'shirleyT', 'graziella', 'vito85', 'orion', 'fest_the_best', 'cindy', 'kenshiro', 'takashi', 'venomD', 'drone', 'son_of_odin', 'mukabe', 'manson', 'ozzi', 'mcgregor', 'tyson', 'rita', 'bingo_lingo', 'nokin75', 'zven', 'rigoletto', 'aurora', 'dorianneAV', 'shelly', 'sharon', 'renegade', 'honda', 'yamahaDT', 'Jean-pierre', 'fleur', 'sophie', 'carmen', 'rosalind', 'rbex78', 'vassallo', 'flavz', 'debbieA', 'tribal89', 'yogi_smith', 'vertigo', 'julius', 'commodus', 'caligula', 'rin_tin_tin', 'rex76', 'chicagoFred', 'dorita', 'annabella', 'andreja', 'trixter', 'frans', 'joeDimech', 'salvadorD', 'picass', 'danube_girl', 'doris', 'dreamer', 'namaste', 'luke_ferris', 'sandra', 'jenny', 'lucienne', 'ambra']
    
    let competitors = []
    let name
    let card
    
    for(let i = 0; i < n; i++) {
        name = names.splice(getRandomNumber(0, names.length - 1), 1)            
        card = generateCard()
 
        competitors.push({ 
            key: i, 
            name: name, 
            winner: false, 
            card: card 
        })
    }
     
    return competitors
}