const { movement } = require('./api');

const prompt = require('prompt-sync')({sigint: true});



const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(playArea) {
        this.playArea = playArea;
        this.movement = movement
    }

    print() {
        for (let i = 0; i < this.playArea.length; i++){
            for (let j = 0; j < this.playArea[i].length; j++) {
                process.stdout.write(this.playArea[i][j])
            }
        console.log('');
        }        
    }

};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
                                            //    creates and prints field
  myField.print();
  
myField.movement('s')