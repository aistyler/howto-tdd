const { defaults } = require('jest-config');

module.exports = {
  displayName: 'app',  
  //
  // preparation
  //
  //"preset": "react",
  "setupFiles": [
    "<rootDir>/test/setup.ts",
  ],

  //
  // transform
  // Files to be transformed *BEFORE* testing
  //
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": `<rootDir>/test/jest-preprocess.js`,
    //"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/asset-mock.ts"
  },
  "transformIgnorePatterns": [
    //"node_modules/(?!(jest-)?react-native|react-native|react-navigation|@react-navigation|@storybook|@react-native-community|expo-*|@expo/vector-icons|@unimodules|native-base-shoutem-theme)"
    "node_modules/(?!(gatsby)/)", // ignore gatsby packages
  ],

  //
  // module name mapper
  // Files to be imported using a modified method *DURING* testing
  //
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    "^[./a-zA-Z0-9$_-]+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": '<rootDir>/__mocks__/asset-mock.js',
  },
  "modulePathIgnorePatterns": [
    //"<rootDir>/lib/"
  ],
  // File extentions to be looked up when importing without making precise the file extension.
  "moduleFileExtensions": [ 
    ...defaults.moduleFileExtensions, "ts", "tsx",
  ],

  //
  // test file path
  // Files to be executed *DURING* testing
  //
  "testMatch": [
    "<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/e2e",
    "/.cache/",
    "/public/",
    "/tmp-*/",
    "/*-not-used/",
  ],

  //
  // Misc.
  "globals": {
    __PATH_PREFIX__: ``, // set by gatsby
  },
  "verbose": false,

  //
  // test coverage report
  //
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/data/**",
    "!src/views/**",
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": ["lcov", "text-summary"],
};
