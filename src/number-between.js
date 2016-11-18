import { isNumber } from './is-number';

export const numberBetween = (value, min, max) => { // eslint-disable-line
  isNumber(value);

  const numberValue = parseFloat(value);

  if (min && numberValue < min) {
    throw new Error(`value must be greater or equal to ${min}`);
  }

  if (max && numberValue > max) {
    throw new Error(`value must be lesser or equal ${max}`);
  }
};
