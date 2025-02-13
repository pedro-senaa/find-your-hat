function movement(userInput) {
    userInput = userInput.toLowerCase();
    let userPositionX = 0;
    let userPositionY = this.playArea.length;

    // moves player
    switch (userInput) {
        case 'a': 
            userPositionX -= 1;
            break;
        case 'd':
            userPositionX += 1;
            break;
        case 'w': 
            userPositionY += 1;
            break;
        case 's':
            userPositionY -= 1;
            break;
        default:
            console.log('BAD INPUT')
    };
    // checks if oob or in hole 'O'
    if (userPositionX < 0 || userPositionY < 0 || userPositionX > this.playArea[0].length - 1 || userPositionY > this.playArea.length - 1) {
        console.log('OUT BOUNDS');
    } else if (this.playArea[userPositionY][userPositionX] === 'O') {
        console.log('FELL INTO A HOLE')
    }

    
};

module.exports = { movement }