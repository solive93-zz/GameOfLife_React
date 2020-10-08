import { expect } from 'chai';

import Game from '../src/Game';
import Cell from '../src/Cell';
import CellState from '../src/CellState';

const {ALIVE, DEAD} = CellState;

const gameStateOfDeadCells = [
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD]
];

const gameStateOf3AliveCells = [
    [ALIVE, DEAD, DEAD],
    [DEAD, ALIVE, DEAD],
    [ALIVE, DEAD, DEAD]
]

describe('Game of Life', () => {
    it('Should be initialized with a given state', () => {
        const game = new Game(gameStateOfDeadCells);
        
        const cellState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
        ];
        
        expect(game.state).to.deep.equal(cellState);
    });

    it('Should return a cell in a given row and column', () => {
        const game = new Game(gameStateOfDeadCells);
        const cell = game.getCell(0, 0);

        expect(cell).to.be.an.instanceof(Cell);
        expect(cell.state).to.equal(gameStateOfDeadCells[0][0]);

        const newGame = new Game(gameStateOf3AliveCells);
        
        const aliveCell = newGame.getCell(1, 1);
        expect(aliveCell).to.be.an.instanceof(Cell);
        expect(aliveCell.state).to.equal(gameStateOf3AliveCells[1][1]);

        const deadCell = newGame.getCell(2, 1);
        expect(deadCell).to.be.an.instanceof(Cell);
        expect(deadCell.state).to.equal(gameStateOf3AliveCells[2][1]);
    })
    
    it('Should return the number of alive neighbors of a given cell', () => {
        const game = new Game(gameStateOf3AliveCells);
        const numberOfNeighbors = game.getAliveNeighbors(1, 1);

        expect(numberOfNeighbors).to.equal(3);
    })
    
});