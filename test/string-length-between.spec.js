/* global it describe */

import { stringLengthBetween } from '../dist/validators';

describe('stringLengthBetween', () => {
  it('should throw if null string', (done) => {
    try {
      stringLengthBetween(null);
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should not throw if no min or max set', (done) => {
    try {
      stringLengthBetween('palsdoasdj');
      done();
    } catch (err) {
      done('should not have thrown when no min or max set');
    }
  });

  it('should throw if under min', (done) => {
    try {
      stringLengthBetween('test', 10);
      done('should have thrown for undex min');
    } catch (err) {
      done();
    }
  });

  it('should throw if over max', (done) => {
    try {
      stringLengthBetween('asdasd', 0, 1);
      done('should have thrown if over max');
    } catch (err) {
      done();
    }
  });

  it('should not throw if between', (done) => {
    try {
      stringLengthBetween('asdasd', 0, 10);
      done();
    } catch (err) {
      done(err);
    }
  });
});
