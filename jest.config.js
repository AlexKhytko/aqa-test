/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testTimeout: 30000,
    clearMocks: true,
  coverageProvider: "v8",
      
};

module.exports = {reporters: ["default", "jest-html-reporters"]};
