import { expect } from 'chai';

import CellState from '../src/CellState';
import Cell from '../src/Cell'

describe('Cell', () => {
    it('Shoud be initialized with a cell state', () => {
        const aliveCell = new Cell(CellState.ALIVE);
        expect(aliveCell.state).to.equal(CellState.ALIVE);

        const deadCell = new Cell(CellState.DEAD);
        expect(deadCell.state).to.equal(CellState.DEAD);
    });

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

    it('Should die with more than 3 alive neighbors', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWith4Neighbors = cell.getNextState(4);
        expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

        const nextStateWith6Neighbors = cell.getNextState(6);
        expect(nextStateWith6Neighbors).to.equal(CellState.DEAD);

        const nextStateWith8Neighbors = cell.getNextState(8);
        expect(nextStateWith8Neighbors).to.equal(CellState.DEAD);
    })

    it('Should come alive with exactly 3 alive neighbors', () => {
        const cell = new Cell(CellState.DEAD);
        const nextState = cell.getNextState(3);
        expect(nextState).to.equal(CellState.ALIVE);
    })

    it('Should remain dead in any other case', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWith2Neighbors = cell.getNextState(2);
        expect(nextStateWith2Neighbors).to.equal(CellState.DEAD);

        const nextStateWith4Neighbors = cell.getNextState(4);
        expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);
    })
})