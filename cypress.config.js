const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'http://localhost:3000',
    pageLoadTimeout: 90000,
  },
});
