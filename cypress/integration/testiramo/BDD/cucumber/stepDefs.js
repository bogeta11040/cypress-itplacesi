import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import SubmitSalaryPage from '../../../pageObjects/SubmitSalaryPage'

const submitSalaryPage = new SubmitSalaryPage;


Given('I am authorized with LinkedIn or GitHub', () => {
    cy.setCookie('PHPSESSID', Cypress.env('cookie'))
    cy.verifyCookie()
})

When('I open the Submit Salary page', () => {
    cy.visit(Cypress.env('url') + "/vnos.php");
})

And('I populate all fields with valid values', (dataTable) => {
    submitSalaryPage.getCompanyDropdown()
    .select(dataTable.rawTable[1][0], {force: true})
    .should('have.value', dataTable.rawTable[1][0])
    submitSalaryPage.getLocationDropdown()
    .select(dataTable.rawTable[1][1], {force: true})
    .should('have.value', dataTable.rawTable[1][1])
    submitSalaryPage.getPositionDropdown()
    .select(dataTable.rawTable[1][2], {force: true})
    .should('have.value', dataTable.rawTable[1][2])
    submitSalaryPage.getSeniorityDropdown()
    .select(dataTable.rawTable[1][3], {force: true})
    .should('have.value', dataTable.rawTable[1][3])
    submitSalaryPage.getNetPayField()
    .type(dataTable.rawTable[1][4], {force: true})
    .should('have.value', dataTable.rawTable[1][4])
    submitSalaryPage.getGrossPayField()
    .type(dataTable.rawTable[1][5], {force: true})
    .should('have.value', dataTable.rawTable[1][5])
})

And('I click the submit button', () => {
    submitSalaryPage.getSubmitButton()
    .click()
})

Then('Form is successfuly submitted', () => {
    submitSalaryPage.getSubmitSalaryForm()
    .should('not.exist')
})