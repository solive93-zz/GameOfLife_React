import CellState from "./CellState";

export default class Cell {

    constructor(state) {
        this.state = state;
    }

    getNextState(numberOfAliveNeighbors) {

        if(this.state == CellState.DEAD) {
            if(numberOfAliveNeighbors == 3) {
                return CellState.ALIVE;
            }
            
            return CellState.DEAD;
        }

        if(numberOfAliveNeighbors == 2 || numberOfAliveNeighbors == 3) {
            return CellState.ALIVE;
        }
        return CellState.DEAD;
    }
}