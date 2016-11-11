export const stringNotEmpty = (value) => { // eslint-disable-line
  if (!value) {
    throw new Error('string must not be null or empty');
  }
};
