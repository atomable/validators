/* global it describe */

import { regex } from '../dist/validators';

describe('regex', () => {
  it('should throw if regex is string and doesn\'t match', (done) => {
    try {
      regex('asdasd', 'test');
      done('should have thrown for non-matching string');
    } catch (err) {
      done();
    }
  });

  it('should throw if regex is RegExp and doesn\'t match', (done) => {
    try {
      regex('asdasd', /test/);
      done('should have thrown for non-matching string');
    } catch (err) {
      done();
    }
  });

  it('should not throw if regex is string and matches', (done) => {
    try {
      regex('asdasd', 'asd');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should not throw if regex is RegExp and matches', (done) => {
    try {
      regex('asdasd', /asd/);
      done();
    } catch (err) {
      done(err);
    }
  });
});
