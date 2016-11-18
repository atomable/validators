import { stringNotEmpty } from './string-not-empty';

export const regex = (value, regex) => { // eslint-disable-line
  stringNotEmpty(value);

  if (regex instanceof RegExp && !regex.test(value)) {
    throw new Error('value doesn\'t match the specified pattern');
  }

  const regexp = new RegExp(regex);
  if (!regexp.test(value)) {
    throw new Error('value doesn\'t match the specified pattern');
  }
};
