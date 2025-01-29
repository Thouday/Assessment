class SignInPage {
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#pass'); }
    get signInButton() { return $('button[action="signIn"]'); }
    get errorMessage() { return $('.error-message'); }  // Replace with actual error selector

    async open() {
        await browser.url('https://magento.softwaretestingboard.com/customer/account/login/');
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.signInButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new SignInPage();
