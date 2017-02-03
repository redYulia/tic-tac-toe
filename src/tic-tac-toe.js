"use strict";

class TicTacToe {
    constructor() {
        this.currentPlayer = 0;
        this.field = [[null,null,null], [null,null,null], [null,null,null]];
    }

    getCurrentPlayerSymbol() {
        if (this.currentPlayer == 0) {
            return 'x';
        }
        else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            if (this.currentPlayer == 0) {
                this.field[rowIndex][columnIndex] = 'x';
                this.currentPlayer = 1;
            
            }
            else {
                this.field[rowIndex][columnIndex] = 'o';
                this.currentPlayer = 0;
            }
        }
        /*console.log(this.field);
        console.log("field value=", this.getFieldValue(rowIndex,columnIndex));
        console.log(this.getCurrentPlayerSymbol());*/
    }

    isFinished() {
        var gameFinished = false;
        for (var i=0; i<3; i++) {
            /*console.log(this.field[i][0]);
            console.log(this.field[i][1]);
            console.log(this.field[i][2]);*/
            
            if (this.field[i][0] == this.field[i][1] && this.field[i][0] == this.field[i][2] && this.field[i][0]!== null) {
                 gameFinished = true;
                /*console.log("hor win");*/
            }
            
            else if (this.field[0][i] == this.field[1][i] && this.field[0][i] == this.field[2][i] && this.field[i][0]!== null) {
                    gameFinished = true;
                    /*console.log("vert win");*/
            }
            else {
                for (var j=0; j<3; j++) {
                    
                }
            }
            
        }
        return gameFinished;
    }

    getWinner() {

    }

    noMoreTurns() {
        var fulledField = true;
        for (var i = 0; i < 3; i++) {
            for (var j= 0; j<3; j++) {
                if (this.field[i][j] == null) {
                    fulledField = false;
                }
            }
        }
        if (fulledField == true) {
            return true;
        }
        else return false;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex >= 0 && rowIndex < 3 && colIndex >= 0 && colIndex < 3) {
            return this.field[rowIndex][colIndex];
        }
        else return null;
    }
}

/*
var game1 = new TicTacToe();
console.log("begiiiiiin", game1.getCurrentPlayerSymbol());
game1.nextTurn(0, 1);
console.log("field value=", game1.getFieldValue(0,1));
console.log(game1.getCurrentPlayerSymbol());
game1.nextTurn(1, 2);
console.log("field value=", game1.getFieldValue(1,2));
console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(0, 2);

console.log("field value=", game1.getFieldValue(0,2));
console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(0, 0);
console.log("field value=", game1.getFieldValue(0,0));
console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(1, 1);
console.log("field value=", game1.getFieldValue(1,1));
            console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(0, 0);
console.log("field value=", game1.getFieldValue(0,0));
            console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(1, 1);
console.log("field value=", game1.getFieldValue(1,1));
console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(2, 1);
console.log("field value=", game1.getFieldValue(2,1));
            console.log(game1.getCurrentPlayerSymbol());

            game1.nextTurn(0, 1);
console.log("field value=", game1.getFieldValue(0,1));
console.log(game1.getCurrentPlayerSymbol());
            game1.nextTurn(2, 1);
console.log("field value=", game1.getFieldValue(2,1));
console.log(game1.getCurrentPlayerSymbol());
            game1.nextTurn(0, 1);
console.log("field value=", game1.getFieldValue(0,1));
console.log(game1.getCurrentPlayerSymbol());
            game1.nextTurn(1, 1);
console.log(game1.getCurrentPlayerSymbol());
            game1.nextTurn(2, 0);
console.log(game1.getCurrentPlayerSymbol());    
            console.log(game1.field);*/

module.exports = TicTacToe;