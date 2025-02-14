const prompt = require('prompt-sync')({sigint: true});

function movement() {
    this.playArea[this.userPositionY][this.userPositionX] = '*'
    this.print();
    let userInput = prompt('Which way to go?: ').toLowerCase();

    // moves player
    switch (userInput) {
        case 'a': 
            this.userPositionX -= 1;
            break;
        case 'd':
            this.userPositionX += 1;
            break;
        case 'w': 
            this.userPositionY -= 1;
            break;
        case 's':
            this.userPositionY += 1;
            break;
        default:
            console.log('BAD INPUT')
    };
    
    // checks if oob or in hole 'O' or in hat
    if (this.userPositionX < 0 || this.userPositionY < 0 || this.userPositionX > this.playArea[0].length - 1 || this.userPositionY > this.playArea.length - 1) {
        console.log('OUT BOUNDS');
        return;
    } else if (this.playArea[this.userPositionY][this.userPositionX] === 'O') {
        console.log('FELL INTO A HOLE')
        return;
    } else if(this.playArea[this.userPositionY][this.userPositionX] === '^') {
        console.log('YOU WON');
        return;
    }   
    this.movement();   
};

module.exports = { movement }