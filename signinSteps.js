const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const SignInPage = require('../pageObjects/SignInPage');
const HomePage = require('../pageObjects/HomePage');
const logger = require('../utils/logger');
const data = require('../data');  // Reusable data for valid/invalid credentials

// Step: Open the Magento homepage
Given('I am on the Magento homepage', async () => {
    logger.info('Opening Magento homepage...');
    await browser.url('https://magento.softwaretestingboard.com/');
    logger.info('Magento homepage opened.');
});

// Step: Click the Sign In button on the homepage
When('I click the Sign In button', async () => {
    logger.info('Clicking on the Sign In button...');
    const signInButton = await $('a[href*="customer/account/login"]'); // Locate Sign In button on homepage
    await signInButton.click();
    logger.info('Clicked on the Sign In button and redirected to the sign-in page.');
});

// Step: Enter valid credentials
When('I enter valid credentials', async () => {
    logger.info('Entering valid credentials...');
    await SignInPage.enterCredentials(data.validCredentials.email, data.validCredentials.password);
    logger.info('Entered valid credentials.');
});

// Step: Click the Sign In button on the sign-in page
When('I click the Sign In button', async () => {
    logger.info('Clicking the Sign In button on the sign-in page...');
    await SignInPage.submitSignIn();
    logger.info('Clicked the Sign In button.');
});

// Step: Validate successful sign-in
Then('I should be signed in successfully', async () => {
    const dashboardText = await $('h1').getText();  // You can change this to a more specific selector based on the actual page
    assert.include(dashboardText, 'My Dashboard', 'User was not redirected to the dashboard.');
    logger.info('User successfully signed in and redirected to the dashboard.');
});

// Step: Validate error message for invalid credentials
Then('I should see an error for invalid credentials', async () => {
    const errorMessage = await SignInPage.getErrorMessage();
    assert.equal(errorMessage, 'Invalid login or password.', 'Error message for invalid login did not appear.');
    logger.info('Error message displayed for invalid login.');
});
