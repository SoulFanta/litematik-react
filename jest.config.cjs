/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1",
    "^@/(.*)$": "<rootDir>/app/$1",
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/build/"],
  resetMocks: true,
  clearMocks: true,
};
module.exports = config;
