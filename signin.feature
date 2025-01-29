Feature: User sign-in

  Scenario: Successful user sign-in
    Given I am on the Magento login page
    When I enter valid credentials
    And I click the Sign In button
    Then I should be signed in successfully
