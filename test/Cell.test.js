import { expect } from 'chai';

import CellState from '../src/CellState';
import Cell from '../src/Cell'

describe('Cell', () => {
    it('Shoud be initialized with a ALIVE cell state', () => {
        const cell = new Cell(CellState.ALIVE);
        expect(cell.state).to.equal(CellState.ALIVE);
    });

    it('Shoud be initialized with a DEAD cell state', () => {
        const cell = new Cell(CellState.DEAD);
        expect(cell.state).to.equal(CellState.DEAD);
    })
})