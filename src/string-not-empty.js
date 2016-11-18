export const stringNotEmpty = (value) => { // eslint-disable-line
  if (!value) {
    throw new Error('value must not be null or empty');
  }
};
