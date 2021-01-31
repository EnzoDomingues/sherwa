module.exports = {
  preset: 'react-native',
  setupFiles: ['./setup-test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|jsbarcode|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.styles.{ts}',
    '!**/*.style.{ts}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/ServiceConfig.ts',
    '!**/routes/**',
    '!**/App.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}