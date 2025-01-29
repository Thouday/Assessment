class SignInPage {
    // Locators
    get emailField() { return $('#email'); }
    get passwordField() { return $('#pass'); }
    get signInButton() { return $('#send2'); }
    get errorMessage() { return $('.message-error'); }

    // Method to fill in the Sign In details
    async login(email, password) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.signInButton.click();
    }

    // Method to validate an error message (if any)
    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new SignInPage();