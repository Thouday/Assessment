const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const logger = require('../utils/logger'); // Assuming you have a logger utility

Before(() => {
    logger.info('Test execution started...');
});

After(() => {
    logger.info('Test execution finished...');
});

// Before all tests start
BeforeAll(() => {
    logger.info('Starting the tests...');
    // Here, you can set up any global preconditions for the tests
});

// Before each scenario
Before(async function() {
    logger.info('Starting a new scenario...');
    // You could set up a fresh browser instance or reset session data
    await browser.reloadSession(); // Restart the session before each scenario
});

// After each scenario
After(async function() {
    logger.info('Scenario finished. Cleaning up...');
    // Any actions after each scenario can go here (e.g., clearing cookies)
    await browser.clearCookies();  // Clear cookies after each scenario
    await browser.saveScreenshot('./screenshots/scenario-result.png'); // Save a screenshot
});

// After all tests are finished
AfterAll(() => {
    logger.info('All tests completed.');
    // Here, you can do global cleanup (like stopping services, etc.)
});