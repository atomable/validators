/* global it describe */

import { isInteger } from '../dist/validators';

describe('isInteger', () => {
  it('should throw if empty string', (done) => {
    try {
      isInteger('');
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should throw if not a number', (done) => {
    try {
      isInteger('asdd');
      done('should have thrown for not a number');
    } catch (err) {
      done();
    }
  });

  it('should throw if not an integer', (done) => {
    try {
      isInteger('34.0');
      done('should have thrown for not an integer');
    } catch (err) {
      done();
    }
  });

  it('should not throw if positive integer', (done) => {
    try {
      isInteger('123');
      isInteger('0');
      isInteger('34E3');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should not throw if negative integer', (done) => {
    try {
      isInteger('-123');
      isInteger('-0');
      isInteger('-3E4');
      done();
    } catch (err) {
      done(err);
    }
  });
});
