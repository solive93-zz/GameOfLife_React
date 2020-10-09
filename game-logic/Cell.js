import CellState from "./CellState";

export default class Cell {

    constructor(state) {
        if(!(state in Object.values(CellState))) {
            throw new Error('Invalid Cell State')
        }
        this.state = state;
    }

    getNextState(numberOfAliveNeighbors) {

        if(this.state == CellState.DEAD) {
            return numberOfAliveNeighbors == 3 ? CellState.ALIVE : CellState.DEAD;
        }

        if(numberOfAliveNeighbors == 2 || numberOfAliveNeighbors == 3) {
            return CellState.ALIVE;
        }
        return CellState.DEAD;
    }
}