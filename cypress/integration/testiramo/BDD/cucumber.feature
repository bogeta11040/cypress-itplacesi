Feature: Submit Salary feature

    @Smoke
    Scenario: Submit Salary Validation
        Given I am authorized with LinkedIn or GitHub
        When I open the Submit Salary page
        And I populate all fields with valid values
            | company    | location | position           | seniority | net pay | gross pay |
            | Povio Labs | Kranj    | Frontend Developer | Medior    | 1800    | 2500      |
        And I click the submit button
        Then Form is successfuly submitted