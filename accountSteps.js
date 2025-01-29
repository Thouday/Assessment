const { Given, When, Then } = require('@cucumber/cucumber');
const CreateAccountPage = require('../pageObjects/CreateAccountPage');
const { assert } = require('chai');
const logger = require('../utils/logger'); // Custom logger for better logging

// Logging example for opening the Magento website
Given('I open the Magento website', async () => {
    logger.info('Opening Magento website...');
    await CreateAccountPage.open();
    logger.info('Magento website opened successfully.');
});

When('I click on the create new account button', async () => {
    logger.info('Clicking on "Create New Account" button...');
    await CreateAccountPage.createAccountButton.click();
    logger.info('Navigated to the Create Account page.');
});

When('I enter valid registration details', async () => {
    logger.info('Entering registration details...');
    await CreateAccountPage.fillAccountDetails('John', 'Doe', 'john.doe@example.com', 'Password123');
    logger.info('Registration details entered.');
});

When('I submit the registration form', async () => {
    logger.info('Submitting the registration form...');
    await CreateAccountPage.submitForm();
    logger.info('Form submitted.');
});

// Step for submitting the form with missing first name
When('I submit the registration form with missing first name', async () => {
    logger.info('Submitting form with missing first name...');
    await CreateAccountPage.fillAccountDetails('', 'Doe', 'john.doe@example.com', 'Password123');
    await CreateAccountPage.submitForm();
    logger.info('Form submitted.');
});

// Step for checking the error for missing first name
Then('I should see an error for missing first name', async () => {
    const errorMessage = await $('#firstname-error').getText();
    assert.equal(errorMessage, 'This is a required field.');
    logger.info('Validated error for missing first name.');
});

// Field-Level Validation for invalid email
Then('I should see an error for invalid email', async () => {
    const errorMessage = await $('#email_address-error').getText();
    assert.equal(errorMessage, 'Please enter a valid email address.');
    logger.info('Validated error for invalid email address.');
});

// Field-Level Validation for password mismatch
Then('I should see an error for password mismatch', async () => {
    const errorMessage = await $('#confirmation-error').getText();
    assert.equal(errorMessage, 'Please enter the same value again.');
    logger.info('Validated error for password mismatch.');
});

// Check if user is redirected to the account dashboard after successful account creation
Then('I should be redirected to the account dashboard', async () => {
    const dashboardText = await $('h1').getText();
    assert.include(dashboardText, 'My Dashboard');
    logger.info('Account dashboard loaded successfully.');
});

// Navigate to the account creation page directly
Given('I navigate to the account creation page', async () => {
    await browser.url('https://magento.softwaretestingboard.com/');
});

// Enter registration details and click submit for data-driven test cases
When('I enter my details', async () => {
    const buttons = await $$('button=Submit');
    console.log(`Found ${buttons.length} buttons with the text "Submit"`);

    // Click on the first button directly, since we already filtered by text
    if (buttons.length > 0) {
        await buttons[0].click();
    } else {
        console.log('Submit button not found');
    }

    const accountPage = new CreateAccountPage();
    // Assuming 'data' is defined somewhere (perhaps as a parameter or global variable)
    await accountPage.enterFirstName(data.firstName);
    await accountPage.enterLastName(data.lastName);
    await accountPage.enterEmail(data.email);
    await accountPage.enterPassword(data.password);
    await accountPage.confirmPassword(data.password);
});

// Click on the "Create Account" button to submit the form
When('I click the "Create Account" button', async () => {
    const accountPage = new CreateAccountPage();
    await accountPage.submitForm();
});

// Check if the user is successfully registered by verifying the success message
Then('I should be registered successfully', async () => {
    const accountPage = new CreateAccountPage();
    expect(await accountPage.getSuccessMessage()).toBe('Account created successfully');
});
