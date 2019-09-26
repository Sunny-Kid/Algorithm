module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'dist'],
  collectCoverage: true,
  coverageDirectory: './coverage'
};
