Feature: Interest Calculator

  
  Scenario Outline: Successfully calculate interest with valid data
    Given I set "<amount>" "<interest>" "<duration>" to calculate "<accrualType>" interest
    When I GET the api to calculate interest for "<accrualType>"
    Then the response was successful
    And the response status code should be 200
    Examples:
        | amount  | interest | duration | accrualType |
        | 1000    | 5        | 3        | SIMPLE      |
        | 1000    | 5        | 3        | COMPOUND    |

  @dev
  Scenario Outline: Failed to calculate interest with invalid data
    Given I set "<amount>" "<interest>" "<duration>" to calculate "<accrualType>" interest
    When I GET the api to calculate interest for "<accrualType>"
    Then the response was unsuccessful
    And the response status code should be 400
    Examples:
        | amount   | interest  | duration  | accrualType |
        |     0    |    0      |     0     | SIMPLE      |
        |     0    |    0      |     0     | COMPOUND    |
        |          |           |           | SIMPLE      |
        |          |           |           | COMPOUND    |
        |   -1000  |    -5     |    -3     | SIMPLE      |
        |   -1000  |    -5     |    -3     | COMPOUND    |
        |   -1000  |    5      |     3     | SIMPLE      |
        |   -1000  |    5      |     3     | COMPOUND    |