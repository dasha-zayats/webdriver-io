Feature: login form on the main page

  Scenario Outline: User can't enter phone number shorter than 12 digits in login form

    Given User on the main page
    When User login with mobile phone and password
    Then User should see a message saying "Invalid phone number"


