/**
 * @param {string} sentence - sentence to be summerized
 * @param {(number | 'short' | 'medium' | 'long')} length - Length of the summerized output
 * @returns String
 */
const oddTrimmer = (sentence, length) => {
  // ======= handle errors -->
  if (typeof sentence !== 'string')
    throw new Error(
      `oddTrimmer expected a string but got ${typeof sentence} instead`
    );
  else if (
    length !== 'short' &&
    length !== 'medium' &&
    length !== 'long' &&
    typeof length !== 'number'
  )
    throw new Error(`Invalid length parameter
                    Length Expected:  short | medium | long | number`);

  if (typeof length === 'number')
    return (
      sentence
        .trim()
        .split(' ')
        .filter((a, b) => b <= length - 1)
        .join(' ') + '...'
    );

  // ======= short summary | 10 words -->
  if (length === 'short')
    return (
      sentence
        .trim()
        .split(' ')
        .filter((a, b) => b <= 9)
        .join(' ') + '...'
    );

  // ======= medium sumary | 25 words -->
  if (length === 'medium')
    return (
      sentence
        .trim()
        .split(' ')
        .filter((a, b) => b <= 19)
        .join(' ') + '...'
    );

  // ======= long sumary | 40 words -->
  if (length === 'long')
    return (
      sentence
        .trim()
        .split(' ')
        .filter((a, b) => b <= 39)
        .join(' ') + '...'
    );
};

oddTrimmer('This is an exampe sent6ence to testthis thing', 3);

module.exports = oddTrimmer;
