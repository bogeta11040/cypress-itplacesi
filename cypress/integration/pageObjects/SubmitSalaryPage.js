class SubmitSalaryPage {
    getCompanyDropdown() {
        return cy.get('#naziv')
    }
    getLocationDropdown() {
        return cy.get('#lokacija')
    }
    getPositionDropdown() {
        return cy.get('#rmesto')
    }
    getSeniorityDropdown() {
        return cy.get('#senioritet')
    }
    getNetPayField() {
        return cy.get('#neto')
    }
    getGrossPayField() {
        return cy.get('#bruto')
    }
    getSubmitButton() {
        return cy.get('input[type="submit"]')
    }
    getSubmitSalaryForm() {
        return cy.get('#forma')
    }
}

export default SubmitSalaryPage