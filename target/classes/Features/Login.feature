Feature: Login functionality feature

  @Smoke
  Scenario Outline: Free CRM Login Test Scenario
    Given user is already on Login Page
    When user enters "<username>" and "<password>"
    And user clicks on login button
    Then user navigate to  home page
    Then Close the browser

    Examples: 
      | username | password |
      | Raghav   |    12345 |
      | eli      |    12345 |
      | Raghav1  |    12345 |
