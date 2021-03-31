module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  // so jest can find module alias imports
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
  },
}
