Feature: As an API I can retrive all the details

  @dev
  Scenario: As an API I can GET all the details
    Given I get the "interestCalculator"
    And the response was successful
    Then the response status code is 200