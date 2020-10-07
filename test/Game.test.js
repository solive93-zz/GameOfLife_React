import { expect } from 'chai';

import { DEAD, ALIVE } from '../src/CellState';
import Game from '../src/Game';
import Cell from '../src/Cell';

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

    it('Should retrieve a cell in a given row and column', () => {
        const game = new Game(gameStateOfDeadCells);
        const cell = game.getCell(0, 0);

        expect(cell).to.be.an.instanceof(Cell);
        expect(game.cell).to.equal(gameStateOfDeadCells[0][0]);

        const newGame = new Game(gameStateOf3AliveCells);
        
        const aliveCell = newGame.getCell(1, 1);
        expect(aliveCell).to.be.an.instanceof(Cell);
        expect(newGame.aliveCell).to.equal(gameStateOf3AliveCells[1][1])

        const deadCell = newGame.getCell(2, 1);
        expect(deadCell).to.be.an.instanceof(Cell);
        expect(newGame.deadCell).to.equal(gameStateOf3AliveCells[2][1])
    })
});