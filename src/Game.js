import Cell from "./Cell";

export default class Game {

    constructor(state) {
        this.state = state.map(row => row.map(cellState => new Cell(cellState)))
    }

    
}