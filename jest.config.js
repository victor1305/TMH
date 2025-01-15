const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/e2e/'],
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.tsx', 'lib/**/*.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30
    }
  }
};

module.exports = createJestConfig(customJestConfig);
