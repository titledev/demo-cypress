const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_baseUrl || "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    // supportFile: "cypress/support/e2e.ts",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
