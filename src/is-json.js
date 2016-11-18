export const isJson = (value) => { // eslint-disable-line
  try {
    const o = JSON.parse(value);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === 'object') {
      // we return the object to save a parsing since it may be used in other validators
      return o;
    }
  } catch (e) { } // eslint-disable-line

  throw new Error('value is not valid JSON.');
};
