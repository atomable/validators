/* global it describe */

import { isNumber } from '../dist/validators';

describe('isNumber', () => {
  it('should throw if empty string', (done) => {
    try {
      isNumber('');
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should throw if not a number', (done) => {
    try {
      isNumber('asdd');
      done('should have thrown for not a number');
    } catch (err) {
      done();
    }
  });

  it('should not throw if positive number', (done) => {
    try {
      isNumber('123');
      isNumber('0');
      isNumber('0.12');
      isNumber('0.');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should not throw if negative number', (done) => {
    try {
      isNumber('-123');
      isNumber('-0');
      isNumber('-0.12');
      isNumber('-0.');
      done();
    } catch (err) {
      done(err);
    }
  });
});
