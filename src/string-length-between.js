import { stringNotEmpty } from './string-not-empty';

export const stringLengthBetween = (value, min, max) => { // eslint-disable-line
  stringNotEmpty(value);

  if (min && value.length < min) {
    throw new Error(`string length must be greater or equal to ${min}`);
  }

  if (max && value.length > max) {
    throw new Error(`string length must be lesser or equal to ${max}`);
  }
};
