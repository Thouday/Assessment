Hi,
I have covered the Main functionality of the Test Cases on the Modules like, Create An Account and Sign In by using WebDriverio with Cucumber framework with Pom folder for the resuability of the Code.

1. Create An Account
i) Created the Feature folder and added the CreateAccount.Feature file.
ii) Created the CreateAccount.js file and written the steps by using Cucumber framework with Given, When, Then.
iii) Created another CreateAccount.js in the Pom folder using the functions / methods for the resuability.

2. SignIn
i) After successfull account creation, Designed the Script for the SignIn Module with both positive and negative scenarios along with the Assertion and Logging functionalities.
ii) For this Created SignIn.Feature and SignIn.js File where Feature file consists for Scenarios and Given, When, and Then.
iii) Where SignIn.js in POM folder consists of methods.

3. Cart
i) For Men, Women, Gear Created the .Feature file.
ii) Here i have checked When Men/ Women / Gear products are Added to the Cart it should be Displayed in the Cart.
iii) Reused the function in the POM, for adding functionalities into the Cart.

Sample Test Execution:

Test Report: Account Creation Feature

Test Cases Executed:

1) Successfully creating a new account
Steps:
Open the Create Account page.
Fill in the account details with valid information (First Name: Pavan, Last Name: Kumar, Email: thouday.pavan99@gmail.com, Password: Pavan@242424).
Submit the registration form.
Expected Result: Success message displayed.
Actual Result: Account created successfully.
Status: Passed

2) User submits the registration form with missing first name
Steps:
Open the account creation page.
Submit the registration form with missing first name (First Name: Pavan, Last Name: Kumar, Email: thouday.pavan99@gmail.com, Password: Pavan@242424).
Expected Result: Error for missing first name.
Actual Result: Error message: "This is a required field."
Status: Passed

3) User submits the registration form with invalid email
Steps:
Open the account creation page.
Submit the registration form with an invalid email (Email: 'thouday.pavan99@gmail.com').
Expected Result: Error for invalid email.
Actual Result: Error message: "Please enter a valid email address."
Status: Passed

4) User submits the registration form with password mismatch
Steps:
Open the account creation page.
Submit the registration form with mismatched passwords (Password: 'Pavan@242424', Confirm Password: 'Pavan@242424').
Expected Result: Error for password mismatch.
Actual Result: Error message: "Please enter the same value again."
Status: Passed

Additional Test Case:

5) Redirection to Account Dashboard after successful registration
Steps:
Open the Create Account page.
Submit the registration form with valid details.
Expected Result: User should be redirected to the account dashboard.
Actual Result: User is redirected to the dashboard with the text "My Dashboard."
Status: Passed

Test Log Summary:
Opening Magento Website: Magento website opened successfully.
Navigating to Account Creation Page: Successfully navigated to the "Create Account" page.
Filling Registration Form: Successfully filled in registration details (first name, last name, email, password).
Form Submission: Form submitted successfully, with expected error messages for invalid or missing details.
Success Message: The success message for account creation is shown as "Account created successfully" after valid submission.

Error Messages:
For missing first name: "This is a required field."
For invalid email: "Please enter a valid email address."
For password mismatch: "Please enter the same value again."

Test Execution Summary:
Total Test Cases Executed: 5
Total Passed: 5
Total Failed: 0
Total Skipped: 0
