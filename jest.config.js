module.exports = {
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts$"],
  testRegex: "src/.+?\\.test\\.ts$",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  modulePaths: [],
  moduleFileExtensions: ["js", "ts"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/package.json",
    "<rootDir>/coverage/",
    "<rootDir>/node_modules"
  ],
  extraGlobals: ["Date"]
};
