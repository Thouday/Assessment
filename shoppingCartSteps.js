const { Given, When, Then } = require('cucumber');
const shoppingCartPage = require('../pom/shoppingCart.js');
const winston = require('winston');

// Set up the logger
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'logfile.log' })
  ]
});

When('I add items from the {string} category to the cart', function (category) {
  logger.info(`Adding items from the "${category}" category to the cart`);
  shoppingCartPage.addItemToCart(category);
  logger.info(`Item added to the cart from the "${category}" category`);
});

Then('I should see the item in the cart', function () {
  logger.info('Verifying if the item is in the cart');
  shoppingCartPage.verifyItemInCart();
  logger.info('Item verified in the cart');
});
