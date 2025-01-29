Feature: User Sign In

  Scenario: Successful user sign-in with valid credentials
    Given I am on the Magento homepage
    When I click the Sign In button
    And I enter valid credentials
    And I click the Sign In button
    Then I should be signed in successfully

  Scenario: Unsuccessful sign-in with invalid credentials
    Given I am on the Magento homepage
    When I click the Sign In button
    And I enter invalid credentials
    And I click the Sign In button
    Then I should see an error for invalid credentials
