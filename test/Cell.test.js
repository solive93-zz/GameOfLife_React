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

    it('Should die if has fewer than 2 alive neighbors', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextState = cell.getNextState(1);
        expect(nextState).to.equal(CellState.DEAD);
    })

    it('Should remain alive when has 2 or 3 alive neighbors', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWith2Neighbors = cell.getNextState(2);
        expect(nextStateWith2Neighbors).to.equal(CellState.ALIVE);

        const nextStateWith3Neighbors = cell.getNextState(3);
        expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE);
    })
})