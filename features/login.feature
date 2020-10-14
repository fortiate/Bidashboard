Feature: Login
  In order to view bi dashboard
  As a user
  I want to get authenticated

  Scenario: happ case
    Given user arrives at "login screen"
    When  user puts in valid username
    And user keys in valid password
    And user clicks "login" button
    Then validate username and password combination 
    And open "Retail Payment" screen

  @wip
  Scenario: Login happy case - password expired
    Given user arrives at "login screen"
    When  user puts in valid username
    And user keys in expired password
    And user clicks "login" button
    Then validate username and password combination
    And open "Set new password" screen

  @ignore
  Scenario: Login invalid username
    Given user arrives at "login screen"
    When  user puts in invalid username
    And user keys in password
    And user clicks "login" button
    Then validate username and password combination 
    And open popup with message "Username and password combination is not correct"

  @wip
  Scenario: Login invalid password
    Given user arrives at "login screen"
    When  user puts in valid username
    And user keys in invalid password
    And user clicks "login" button
    Then validate username and password combination 
    And open popup with message "Username and password combination is not correct"

  @wip
  Scenario: Login - username password empty
    Given user arrives at "login screen"
    When  user clicks "login" button
    Then open popup with message "Username and password cannot be empty"

  @wip
  Scenario: Login - password empty
    Given user arrives at "login screen"
    When user puts in username
    And user clicks "login" button
    Then open popup with message "Password cannot be empty"

  @wip
  Scenario: Login - username empty
    Given user arrives at "login screen"
    When user puts in password
    And user clicks "login" button
    Then open popup with message "Username cannot be empty"
