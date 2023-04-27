Feature: Pay bills

    In Pay Bills tab we have ability to ...
    Scenario: Pay Saved Payee
    Given I'm logging to application
    And I navigate to Pay Bills tab
    When I fill all fields in form
    And I click Pay button
    Then I see confirmation message: The payment was successfully submitted.
