Feature: Autenticacion de usuarios

  Background:
    * url baseUrl
    * header Content-Type = 'application/json'
    * def new_user =
      """
      {
        "username": "dbernardo",
        "password": "$dsqwe"
      }
      """
    * def correct_user =
      """
      {
        "username": "dbernardo",
        "password": "$dsqwe"
      }
      """
    * def incorrect_username =
      """
      {
        "username": "luisdsd",
        "password": "Luis4321"
      }
      """
    * def incorrect_password =
      """
      {
        "username": "dbernardo",
        "password": "Luis4321"
      }
      """


  Scenario: Registrar usuario nuevo
    Given path 'signup'
    And request new_user
    When method post
    Then status 200

  Scenario: Registrar usuario ya existente
    Given path 'signup'
    And request new_user
    When method post
    Then status 200
    And match response == {"errorMessage": "This user already exist."}

  Scenario: Ingreso credenciales correctas
    Given path 'login'
    And request correct_user
    When method post
    Then status 200
    And print response

  Scenario: Ingreso user incorrecto
    Given path 'login'
    And request incorrect_username
    When method post
    Then status 200
    And match response == {"errorMessage": "User does not exist."}

  Scenario: Ingreso password incorrecto
    Given path 'login'
    And request incorrect_password
    When method post
    Then status 200
    And match response == {"errorMessage": "Wrong password."}
