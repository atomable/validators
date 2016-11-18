import { isJson } from './is-json';

const objectHasComplexProperty = (obj, propertyPath) => {
  const fragments = propertyPath.split('.');

  fragments.reduce((currentObj, fragment) => {
    if (currentObj) {
      const value = currentObj[fragment];
      if (!value) {
        throw new Error(`value '${currentObj}' is missing the property '${fragment}'`);
      }

      if (Array.isArray(value)) {
        const remainingPath = propertyPath
          .substring(propertyPath.indexOf(fragment) + fragment.length + 1);

        value.forEach(arrValue => objectHasComplexProperty(arrValue, remainingPath));
      } else {
        return value;
      }
    }

    return null;
  }, obj);
};

const hasProperty = (obj, propertyPath) => {
  if (propertyPath) {
    if (propertyPath.indexOf('.') >= 0) {
      objectHasComplexProperty(obj, propertyPath);
    } else if (!obj[propertyPath]) {
      throw new Error(`value is missing the property '${propertyPath}'`);
    }
  }
};

export const jsonHasProperties = (value, ...properties) => { // eslint-disable-line
  const obj = isJson(value);

  properties.forEach(property => hasProperty(obj, property));
};
