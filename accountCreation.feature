Feature: Account Creation

  Scenario: User creates a new account with valid details
    Given I navigate to the account creation page
    When I enter my details
    And I click the "Create Account" button
    Then I should be registered successfully

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
