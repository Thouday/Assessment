Feature: User Sign In

  Scenario: Successful user sign-in with valid credentials
    Given I have opened the Magento sign-in page
    When I sign in with valid credentials
    Then I should be signed in successfully

  Scenario: Unsuccessful sign-in with invalid credentials
    Given I have opened the Magento sign-in page
    When I sign in with invalid credentials
    Then I should see an error for invalid credentials
