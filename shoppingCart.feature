Feature: Shopping Cart Tests

  Scenario: Add items from Men's category to the cart
    When I add items from the "men" category to the cart
    Then I should see the item in the cart

  Scenario: Add items from Women's category to the cart
    When I add items from the "women" category to the cart
    Then I should see the item in the cart

  Scenario: Add items from Gear category to the cart
    When I add items from the "gear" category to the cart
    Then I should see the item in the cart