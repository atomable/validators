/* global it describe */

import { jsonHasProperties } from '../dist/validators';

describe('jsonHasProperties', () => {
  it('should throw if empty string', (done) => {
    try {
      jsonHasProperties('');
      done('should have thrown for empty string');
    } catch (err) {
      done();
    }
  });

  it('should throw if not json', (done) => {
    try {
      jsonHasProperties('asdd');
      done('should have thrown for not valid json');
    } catch (err) {
      done();
    }
  });

  it('should throw if not valid json', (done) => {
    try {
      jsonHasProperties('{"asd": 123, "test": true, "value"}');
      done('should have thrown for not valid json');
    } catch (err) {
      done();
    }
  });

  it('should throw if object doesn\'t have a simple property', (done) => {
    try {
      jsonHasProperties('{ "asd": "test" }', 'asd', 'other');
      done('should have thrown since object is missing a property');
    } catch (err) {
      done();
    }
  });

  it('should throw if object doesn\'t have a nested property', (done) => {
    try {
      jsonHasProperties('{ "asd": {"test": {"bla": "asd"}} }', 'asd.test.other');
      done('should have thrown since object is missing a property');
    } catch (err) {
      done();
    }
  });

  it('should throw if array object doesn\'t have the nested property', (done) => {
    try {
      jsonHasProperties('{ "asd": [{"test": true}, {"test": true}, {"other": true}] }', 'asd.test');
      done('should have thrown since object is missing a property');
    } catch (err) {
      done();
    }
  });

  it('should throw if nested array object doesn\'t have the nested property', (done) => {
    try {
      jsonHasProperties('{ "asd": [{"test": [{}, {}]}, {"test": [{"other": "asd"}, {"other": "asdf"}]}] }', 'asd.test.other');
      done('should have thrown since object is missing a property');
    } catch (err) {
      done();
    }
  });

  it('should not throw if object has all simple properties', (done) => {
    try {
      jsonHasProperties('{"asd": 123, "test": true}', 'asd', 'test');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should not throw if object has the nested property', (done) => {
    try {
      jsonHasProperties('{ "asd": {"test": true}, "hello": "world" }', 'asd.test', 'hello');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should not throw if all array elements have nested property', (done) => {
    try {
      jsonHasProperties('{ "asd": [{"test": {"other": true}}, {"test": {"other": true}}] }', 'asd.test.other');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should not throw if nested array elements have nested property', (done) => {
    try {
      jsonHasProperties('{ "asd": [{"test": [{"other": true}, {"other": "asd"}]}, {"test": {"other": true}}] }', 'asd.test.other');
      done();
    } catch (err) {
      done(err);
    }
  });
});
