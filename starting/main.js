const { movement } = require('./api');

const prompt = require('prompt-sync')({sigint: true});



const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(playArea) {
        this.playArea = playArea;
        this.movement = movement;
        this.userPositionX = 0;
        this.userPositionY = 0;
    }

    print() {
        for (let i = 0; i < this.playArea.length; i++){
            for (let j = 0; j < this.playArea[i].length; j++) {
                process.stdout.write(this.playArea[i][j])
            }
        console.log('');
        }        
    }

    static generateField() {
        let lines = Number(prompt('How many lines? '));
        let cols = Number(prompt('How many colummns? '));
        if (lines < 3  || cols < 3  ) {
            console.log('please make a bigger field')
            Field.generateField()
        } else if (isNaN(lines) || isNaN(cols)) {
            console.log('please input a number');
            Field.generateField();
        }
        let field = [];
        // fills field with blank 
        for (let i = 0; i < lines; i++) {
            let newLine = Array(cols).fill('░');
            
            field.push(newLine)

        } 
        // puts holes (might give unwinnable game xD)
        for (let i = 0; i < Math.ceil((lines * cols) / 3); i++) {
            let randX = Math.floor((Math.random() * cols)); 
            let randY = Math.floor((Math.random() * lines));
            do {
                randX = Math.floor((Math.random() * cols)); 
                randY = Math.floor((Math.random() * lines));
            } while (field[randY][randX] === 'O' || (randX === 0 && randY === 0));
            field[randY][randX] = 'O';
        }
        // puts hat in last line
        field[lines - 1][Math.floor((Math.random() * cols))] = '^';

        return field;
    }
};

const myField = new Field(Field.generateField());

myField.movement();