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
});