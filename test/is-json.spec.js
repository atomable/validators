/* global it describe */

import { isJson } from '../dist/validators';

describe('isJson', () => {
  it('should throw if empty string', (done) => {
    try {
      isJson('');
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should throw if not json', (done) => {
    try {
      isJson('asdd');
      done('should have thrown for not valid json');
    } catch (err) {
      done();
    }
  });

  it('should throw if not valid json', (done) => {
    try {
      isJson('{"asd": 123, "test": true, "value"}');
      done('should have thrown for not valid json');
    } catch (err) {
      done();
    }
  });

  it('should throw if object', (done) => {
    try {
      isJson({ asd: 'test' });
      done('should have thrown for object');
    } catch (err) {
      done();
    }
  });

  it('should not throw if valid json', (done) => {
    try {
      isJson('{"asd": 123, "test": true}');
      isJson('{}');
      isJson('[]');
      done();
    } catch (err) {
      done(err);
    }
  });
});
