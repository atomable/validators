export const isInteger = (value) => { // eslint-disable-line
  if (!value || value.indexOf('.') >= 0 || value % 1 !== 0) {
    throw new Error('value is not an integer.');
  }
};
