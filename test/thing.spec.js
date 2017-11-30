import doTheThing from '../src/thing';
import {expect} from 'chai';

describe('Doing the thing', () => {
    it('should do the thing', () => {
        expect(doTheThing()).to.equal(4);
    });
});