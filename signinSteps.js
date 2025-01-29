const { Given, When, Then } = require('@cucumber/cucumber');
const SignInPage = require('../pageObjects/SignInPage');
const CreateAccountPage = require('../pageObjects/CreateAccountPage');
const { assert } = require('chai');
const logger = require('../utils/logger');
const data = require('../data');  // Reusable data

// Step: Launch the URL and create an account
Given('I have created a new account with valid details', async () => {
    logger.info('Opening Magento website...');
    await CreateAccountPage.open();
    logger.info('Opening Create Account page...');
    await CreateAccountPage.fillAccountDetails(data.validCredentials.firstName, data.validCredentials.lastName, data.validCredentials.email, data.validCredentials.password);
    await CreateAccountPage.submitForm();
    logger.info('Account created successfully.');
});

// Step: Sign in using the created credentials
When('I sign in with valid credentials', async () => {
    logger.info('Signing in with valid credentials...');
    await SignInPage.login(data.validCredentials.email, data.validCredentials.password);
    logger.info('Signed in successfully.');
});

// Step: Validate sign-in error (if applicable)
Then('I should be signed in successfully', async () => {
    const dashboardText = await $('h1').getText();
    assert.include(dashboardText, 'My Dashboard');
    logger.info('User successfully signed in and redirected to dashboard.');
});

Then('I should see an error for invalid credentials', async () => {
    const errorMessage = await SignInPage.getErrorMessage();
    assert.equal(errorMessage, 'Invalid login or password.');
    logger.info('Error message displayed for invalid login.');
});