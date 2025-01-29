const { Given, When, Then } = require('@cucumber/cucumber');
const SignInPage = require('../pageObjects/SignInPage');
const CreateAccountPage = require('../pageObjects/CreateAccountPage');
const { assert } = require('chai');
const logger = require('../utils/logger');
const data = require('../data');  // Reusable data

// Step: Launch the URL and create an account
Given('I have created a new account with valid details', async () => {
    logger.info('Opening Magento website...');
    await CreateAccountPage.open();  // Navigate to Create Account page
    logger.info('Opening Create Account page...');
    
    // Fill in the account details using data from `data.validCredentials`
    await CreateAccountPage.fillAccountDetails(
        data.validCredentials.firstName, 
        data.validCredentials.lastName, 
        data.validCredentials.email, 
        data.validCredentials.password
    );
    
    await CreateAccountPage.submitForm();  // Submit the form to create the account
    logger.info('Account created successfully.');
});

// Step: Sign in using the created credentials
When('I sign in with valid credentials', async () => {
    logger.info('Signing in with valid credentials...');
    // Use the SignInPage to perform login with the provided credentials
    await SignInPage.login(data.validCredentials.email, data.validCredentials.password);
    logger.info('Signed in successfully.');
});

// Step: Validate successful sign-in and redirection to the dashboard
Then('I should be signed in successfully', async () => {
    // Check if the user is redirected to the dashboard (could be a specific page element text)
    const dashboardText = await $('h1').getText();
    assert.include(dashboardText, 'My Dashboard', 'User was not redirected to the dashboard.');
    logger.info('User successfully signed in and redirected to dashboard.');
});

// Step: Validate error message for invalid credentials
Then('I should see an error for invalid credentials', async () => {
    // Retrieve the error message for invalid login attempt
    const errorMessage = await SignInPage.getErrorMessage();
    assert.equal(errorMessage, 'Invalid login or password.', 'Error message for invalid login did not appear.');
    logger.info('Error message displayed for invalid login.');
});
