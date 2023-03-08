const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  //for HTML Reports
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on),  //for html reports
      // implement node event listeners here
      on('task', {downloadFile})
      allureWriter(on, config);
            return config;
    },
  },
});


