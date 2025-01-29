Feature: Account Creation

  Scenario: Successfully creating a new account
    Given I open the Create Account page
    When I fill in the account details with valid information
    And I submit the form
    Then I should see the success message

  Scenario: User submits the registration form with missing first name
    Given I navigate to the account creation page
    When I submit the registration form with missing first name
    Then I should see an error for missing first name

  Scenario: User submits the registration form with invalid email
    Given I navigate to the account creation page
    When I enter invalid email address
    And I click the "Create Account" button
    Then I should see an error for invalid email

  Scenario: User submits the registration form with password mismatch
    Given I navigate to the account creation page
    When I enter details with mismatched passwords
    And I click the "Create Account" button
    Then I should see an error for password mismatch
