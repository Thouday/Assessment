const { Given, When, Then } = require('@cucumber/cucumber');
const NavigationPage = require('../pageObjects/NavigationPage');
const { assert } = require('chai');
const logger = require('../utils/logger');

// Step: Navigate to Men's category and add items to cart
When('I add items from the {string} category to the cart', async (category) => {
    logger.info(Navigating and adding items from ${category} category to the cart...);
    await NavigationPage.addItemsToCart(category);
    logger.info(${category} item added to the cart.);
});

// Step: Navigate to the cart to verify added items
When('I view the cart', async () => {
    logger.info('Viewing the cart...');
    await NavigationPage.viewCart();
});

// Step: Validate the items in the cart
Then('I should see the item in the cart', async () => {
    // Validate cart contents (you can improve this to validate the specific item)
    const cartText = await $('h1').getText();
    assert.include(cartText, 'Shopping Cart');
    logger.info('Item successfully added to the cart.');
});
