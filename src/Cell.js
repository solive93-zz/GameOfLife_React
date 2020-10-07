export default class Cell {

    constructor(state) {
        this.state = state;
    }

    getNextState(numberOfAliveNeighbors) {
        if(numberOfAliveNeighbors < 2) {
            return 0
        }
        return 1;
    }
}