class NavigationPage {
    // Locators for Men's, Women's, and Gear drop-down menus
    get mensMenu() { return $('a[title="Men"]'); }
    get womensMenu() { return $('a[title="Women"]'); }
    get gearMenu() { return $('a[title="Gear"]'); }

    // Locators for items under Men's, Women's, and Gear categories
    get mensTops() { return $('a[title="Tops"]'); }
    get mensBottoms() { return $('a[title="Bottoms"]'); }

    get womensTops() { return $('a[title="Tops"]'); }
    get womensBottoms() { return $('a[title="Bottoms"]'); }

    get gearBags() { return $('a[title="Bags"]'); }
    get gearFitness() { return $('a[title="Fitness"]'); }
    get gearWatches() { return $('a[title="Watches"]'); }

    // Locators for adding items to the cart
    get addToCartButton() { return $('button[title="Add to Cart"]'); }
    get viewCartButton() { return $('a[title="View Cart"]'); }

    // Method to navigate and add items to the cart
    async addItemsToCart(category) {
        if (category === 'men') {
            await this.mensMenu.moveTo();  // Hover over the Men's menu
            await this.mensTops.click();   // Select Tops from Men's
            await this.addToCartButton.click(); // Add item to the cart
        } else if (category === 'women') {
            await this.womensMenu.moveTo(); // Hover over the Women's menu
            await this.womensTops.click();  // Select Tops from Women's
            await this.addToCartButton.click(); // Add item to the cart
        } else if (category === 'gear') {
            await this.gearMenu.moveTo();  // Hover over the Gear menu
            await this.gearBags.click();  // Select Bags from Gear
            await this.addToCartButton.click(); // Add item to the cart
        } else {
            throw new Error(Unknown category: ${category});
        }
    }

    // Method to view the cart
    async viewCart() {
        await this.viewCartButton.click();
    }
}

module.exports = new NavigationPage();