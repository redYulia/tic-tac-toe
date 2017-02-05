"use strict";

class TicTacToe {
    constructor() {
        this.field = [[null,null,null], [null,null,null], [null,null,null]];
        this.playerCount = 0;
    }

    getCurrentPlayerSymbol() {
        if (this.playerCount % 2 == 0) return 'x';
        else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.playerCount++;
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw())  return true;
        else return false;    
    }

    getWinner() {
        var x = this.field;  
        if ((x[1][1] == x[0][0] && x[1][1] == x[2][2] && x[1][1]!== null) || (x[1][1] == x[2][0] && x[1][1] == x[0][2] && x[1][1]!== null)) {
                return x[1][1];
            }
        else {
            for (var i=0; i<3; i++) {
                if (x[i][0] == x[i][1] && x[i][0] == x[i][2] && x[i][0]!== null) {
                    return x[i][0];
                }
                else if (x[0][i] == x[1][i] && x[0][i] == x[2][i] && x[0][i]!== null) {
                    return x[0][i];
                }
            }
            return null;        
        }
        
    }

    noMoreTurns() {
        var fulledField = true;
        for (var i = 0; i < 3; i++) {
            for (var j= 0; j<3; j++) {
                if (this.field[i][j] == null) fulledField = false;
            }
        }
        if (fulledField == true) return true;
        else return false;
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) return true;
        else return false;

    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex >= 0 && rowIndex < 3 && colIndex >= 0 && colIndex < 3) return this.field[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;