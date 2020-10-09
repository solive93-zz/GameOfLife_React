import { expect } from 'chai';

import CellState from '../game-logic/CellState.js';

describe('CellState', () => {
    it('Should have a ALIVE State', () => {
        expect(CellState.ALIVE).to.equal(1)
    });

    it('Should have a DEAD State', () => {
        expect(CellState.DEAD).to.equal(0)
    })
})