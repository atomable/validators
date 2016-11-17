export const regex = (value, regex) => { // eslint-disable-line
  if (!value) {
    throw new Error('value must not be null or empty');
  }

  if (regex instanceof RegExp && !regex.test(value)) {
    throw new Error('value doesn\'t match the specified pattern');
  }

  const regexp = new RegExp(regex);
  if (!regexp.test(value)) {
    throw new Error('value doesn\'t match the specified pattern');
  }
};
