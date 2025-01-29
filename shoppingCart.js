const { By } = require('selenium-webdriver');

class ShoppingCart {
  constructor(driver) {
    this.driver = driver;
  }

  // Helper function to get the category element
  getCategoryItem(category) {
    return this.driver.findElement(By.xpath(`//div[contains(@class, 'category-${category}')]//button[text()='Add to Cart']`));
  }

  // Helper function to get the cart icon or cart summary
  getCartIcon() {
    return this.driver.findElement(By.id('cart-icon'));
  }

  // Helper function to verify if the item is in the cart
  getCartItem() {
    return this.driver.findElement(By.css('.cart-item'));
  }

  // Add item to cart based on category
  async addItemToCart(category) {
    const itemButton = await this.getCategoryItem(category);
    await itemButton.click();
  }

  // Verify if the item is added to the cart
  async verifyItemInCart() {
    const cartIcon = await this.getCartIcon();
    await cartIcon.click();
    const cartItem = await this.getCartItem();
    const isVisible = await cartItem.isDisplayed();
    if (!isVisible) {
      throw new Error('Item not found in the cart');
    }
  }
}

module.exports = ShoppingCart;
