module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'lcovonly', 'text-summary'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec).js']
}
