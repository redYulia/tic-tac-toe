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
        if ((this.getWinner() !== null) || (this.isDraw() == true)) {
            return true;
        }
        else return false;
        
    }

    getWinner() {
        var x = this.field;
        
        
        if ((x[1][1] == x[0][0] && x[1][1] == x[2][2] && x[1][1]!== null) || (x[1][1] == x[2][0] && x[1][1] == x[0][2] && x[1][1]!== null)) {
                    /*console.log("win", x[1][1]);*/
                    return x[1][1];
            }
        else {
            for (var i=0; i<3; i++) {
            
                /*console.log("========");
                console.log(x[i][0], x[i][1], x[i][2]);
                console.log("========");*/

                if (x[i][0] == x[i][1] && x[i][0] == x[i][2] && x[i][0]!== null) {
                        /*console.log("win", x[i][0]);*/
                        return x[i][0];
                    }
                else if (x[0][i] == x[1][i] && x[0][i] == x[2][i] && x[0][i]!== null) {
                        /*console.log("win", x[0][i]);*/
                        return x[0][i];
                    }
                else {}
            }
            return null;
            
            
            
            
        }
        
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
        if ((this.getWinner() == null) && (this.noMoreTurns() == true)) {
            return true;
        }
        else return false;

    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex >= 0 && rowIndex < 3 && colIndex >= 0 && colIndex < 3) {
            return this.field[rowIndex][colIndex];
        }
        else return null;
    }
}


/*var game1 = new TicTacToe();
console.log("begiiiiiin", game1.getCurrentPlayerSymbol());
game1.nextTurn(1, 1)
            console.log("field value=",game1.field, game1.getWinner());

            game1.nextTurn(2, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 0)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(2, 1)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(2, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(0, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(2, 2)
            console.log("field value=",game1.getWinner(),game1.field);

            game1.nextTurn(1, 2)
            console.log("field value=",game1.getWinner(),game1.field);*/
/*
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