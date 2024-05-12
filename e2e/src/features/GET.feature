Feature: Interest Calculator

  @dev
  Scenario Outline: Successfully calculate interest with valid data
    Given I set "<amount>" "<interest>" "<duration>" to calculate "<accrualType>" interest
    When I GET the api to calculate interest for "<accrualType>"
    Then the response was successful
    And the response status code should be 200
    Examples:
        | amount  | interest | duration | accrualType |
        | 1000    | 5        | 3        | SIMPLE      |
        | 1000    | 5        | 3        | COMPOUND    |