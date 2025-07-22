const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mochawesome(on);
      return config;
    },
    baseUrl: process.env.CYPRESS_baseUrl || "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    // supportFile: "cypress/support/e2e.ts",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      screenshotsFolder: "cypress/reports/screenshots",
    },
    screenshotOnRunFailure: true,
    video: false,
  },
});

// const { defineConfig } = require("cypress");
// const mochawesome = require("cypress-mochawesome-reporter/plugin");

// module.exports = defineConfig({
//   e2e: {
//     projectId: "xugygh",
//     browser: "chrome",
//     setupNodeEvents(on, config) {
//       mochawesome(on); // ใช้งาน mochawesome reporter
//       return config;
//     },
//     reporter: "cypress-mochawesome-reporter",
//     reporterOptions: {
//       reportDir: "cypress/reports",
//       overwrite: false, // ไม่ลบรายงานเก่า
//       html: true,
//       json: true,
//       screenshotsFolder: "cypress/reports/screenshots"
//     },
//     screenshotOnRunFailure: true, // ถ่ายรูปเมื่อเทส fail
//     video: false, // ปิดวิดีโอถ้าไม่จำเป็น
//   },
// });
