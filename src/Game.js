import Cell from "./Cell";
import CellState from "./CellState";

export default class Game {

    constructor(state) {
        this.state = state.map(row => row.map(cellState => new Cell(cellState)))
    }

    getCell(row, col) {
        return this.state[row][col];
    }

    getAliveNeighbors(row, col) {
        let aliveNeighbors = 0;
        for(let rowIndex = row-1; rowIndex <= row+1; rowIndex++) {
            for(let cell = col-1; cell <= col+1; cell++) {
                cell == CellState.ALIVE ? aliveNeighbors++ : aliveNeighbors
            }
        }
        return aliveNeighbors;
    }
    
}