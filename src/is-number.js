export const isNumber = (value) => { // eslint-disable-line
  if (isNaN(parseFloat(value)) || !isFinite(value)) {
    throw new Error('value is not a number');
  }
};
