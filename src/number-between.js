export const numberBetween = (value, min, max) => { // eslint-disable-line
  if (!value) {
    throw new Error('string must not be null or empty');
  }

  const numberValue = parseFloat(value);
  if (isNaN(numberValue) || !isFinite(value)) {
    throw new Error('value is not a number');
  }

  if (min && numberValue < min) {
    throw new Error(`value must be greater or equal to ${min}`);
  }

  if (max && numberValue > max) {
    throw new Error(`value must be lesser or equal ${max}`);
  }
};
