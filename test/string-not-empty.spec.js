/* global it describe */

import { stringNotEmpty } from '../dist/validators';

describe('stringNotEmpty', () => {
  it('should throw if empty string', (done) => {
    try {
      stringNotEmpty('');
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should throw if null', (done) => {
    try {
      stringNotEmpty(null);
      done('should have thrown for null');
    } catch (err) {
      done();
    }
  });

  it('should throw if undefined', (done) => {
    try {
      stringNotEmpty(undefined);
      done('should have thrown for undefined');
    } catch (err) {
      done();
    }
  });

  it('should not throw if not empty', (done) => {
    try {
      stringNotEmpty('asdasd');
      done();
    } catch (err) {
      done(err);
    }
  });
});
