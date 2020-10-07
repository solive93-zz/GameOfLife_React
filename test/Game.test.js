import { expect } from 'chai';

import { DEAD } from '../src/CellState';
import Game from '../src/Game';
import Cell from '../src/Cell';

describe('Game of Life', () => {
    it('Should be initialized with a given state', () => {
        const state = [
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD]
        ];
        
        const game = new Game(state);
        
        const cellState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
        ];
        
        expect(game.state).to.deep.equal(cellState);
    });

    it('Should retrieve a cell in a given row and column', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD]
        ];

        const game = new Game(gameState);
        const cell = game.getCell(0, 0);

        expect(cell).to.be.an.instanceof(Cell);
        expect(game.cell).to.equal(gameState[0][0]);
    })
});