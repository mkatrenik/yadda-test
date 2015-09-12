Feature: Mess around
  As a human
  I want sign in to site
  So I can mess around

  @Only
  Scenario: Sign in
    Given  I open the url "http://localhost:3000"
    And    I have signed in
    Then   I am in