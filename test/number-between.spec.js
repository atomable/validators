/* global it describe */

import { numberBetween } from '../dist/validators';

describe('numberBetween', () => {
  it('should throw if null string', (done) => {
    try {
      numberBetween(null);
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should not throw if no min or max set', (done) => {
    try {
      numberBetween('3');
      done();
    } catch (err) {
      done('should not have thrown when no min or max set');
    }
  });

  it('should throw if under min', (done) => {
    try {
      numberBetween('3', 10);
      done('should have thrown for undex min');
    } catch (err) {
      done();
    }
  });

  it('should throw if over max', (done) => {
    try {
      numberBetween('5', 0, 1);
      done('should have thrown if over max');
    } catch (err) {
      done();
    }
  });

  it('should not throw if between', (done) => {
    try {
      numberBetween('5', 0, 10);
      numberBetween('10', 0, 10);
      numberBetween('0', 0, 10);
      numberBetween('-3', -10, 0);
      done();
    } catch (err) {
      done(err);
    }
  });
});
