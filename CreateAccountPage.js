class CreateAccountPage {
    // Locators
    get createAccountButton() { return $('a[href="/customer/account/create/"]'); }
    get firstNameField() { return $('#firstname'); }
    get lastNameField() { return $('#lastname'); }
    get emailField() { return $('#email_address'); }
    get passwordField() { return $('//input[@id="password"]'); }
    get confirmPasswordField() { return $('#password-confirmation'); }
    get createAccountSubmitButton() { return $('button[type="submit"]'); }
    get submitButton() { return $('button[type="submit"]'); }
    get successMessage() { return $('.message-success'); }

    // Method to go to the Create Account page
   async open() {
           await browser.url('https://magento.softwaretestingboard.com/');
           await this.createAccountButton.waitForClickable();  // Wait until the "Create Account" button is clickable
           await this.createAccountButton.click();
   }

    // Method to fill the registration form
    async fillAccountDetails(firstName, lastName, email, password) {
            await this.firstNameField.waitForDisplayed();
            await this.firstNameField.setValue(firstName);

            await this.lastNameField.waitForDisplayed();
            await this.lastNameField.setValue(lastName);

            await this.emailField.waitForDisplayed();
            await this.emailField.setValue(email);

            await this.passwordField.waitForDisplayed();
            await this.passwordField.setValue(password);

            await this.confirmPasswordField.waitForDisplayed();
            await this.confirmPasswordField.setValue(password);
    }

    // Method to submit the account creation form
    async submitForm() {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }

    // Method to get the success message
    async getSuccessMessage() {
            await this.successMessage.waitForDisplayed();  // Wait for the success message to appear
            return await this.successMessage.getText();
    }

    async enterFirstName(firstName) {
            await this.firstNameField.setValue(firstName);
        }

        async enterLastName(lastName) {
            await this.lastNameField.setValue(lastName);
        }

        async enterEmail(email) {
            await this.emailField.setValue(email);
        }

        async enterPassword(password) {
            await this.passwordField.setValue(password);
        }

        async confirmPassword(password) {
            await this.confirmPasswordField.setValue(password);
        }

        async submitForm() {
            await this.submitButton.click();
        }
    }

module.exports = new CreateAccountPage();