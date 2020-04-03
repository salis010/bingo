export let numberSounds = []

let file

for(let i = 1; i <= 75; i++) {
    
    file = new Audio('../sound/numbers/' + i.toString() + '.mp3')
    
    numberSounds.push(file)
}

