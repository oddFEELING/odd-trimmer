const oddTrimmer = require('../trimmer');

// ======= test length as a number -->
test('Summarize a sentence to the length of words specified', () => {
  expect(
    oddTrimmer(
      'This is an example string word to test that this stuff works',
      6
    )
  ).toBe('This is an example string word...');
});

// ======= test short length -->
test('Produce 10 words', () => {
  expect(
    oddTrimmer(
      'Nubia algorithmically generates news. It is designed to help journalists improve their productivity by giving them access to the tool required to produce automated articles. In turn, it allows developers to collaborate with journalists and  gather feedback from editors, readers and the whole news room at large.',
      'short'
    )
  ).toBe(
    'Nubia algorithmically generates news. It is designed to help journalists...'
  );
});

// ======= test medium length -->
test('Produce 20 words', () => {
  expect(
    oddTrimmer(
      'Nubia algorithmically generates news. It is designed to help journalists improve their productivity by giving them access to the tool required to produce automated articles. In turn, it allows developers to collaborate with journalists and  gather feedback from editors, readers and the whole news room at large.',
      'medium'
    )
  ).toBe(
    'Nubia algorithmically generates news. It is designed to help journalists improve their productivity by giving them access to the tool...'
  );
});

// ======= test longb length -->
test('Produce 40 words', () => {
  expect(
    oddTrimmer(
      'Nubia algorithmically generates news. It is designed to help journalists improve their productivity by giving them access to the tool required to produce automated articles. In turn, it allows developers to collaborate with journalists and gather feedback from editors, readers and the whole news room at large.',
      'long'
    )
  ).toBe(
    'Nubia algorithmically generates news. It is designed to help journalists improve their productivity by giving them access to the tool required to produce automated articles. In turn, it allows developers to collaborate with journalists and gather feedback from editors, readers...'
  );
});
