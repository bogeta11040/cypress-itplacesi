class SalariesPage {
    getSalary() {
        return cy.get('tr td:nth-child(3)')
    }
    getAverageSalary() {
        return cy.get(':nth-child(2) > .badge')
    }
    getMinimumSalary() {
        return cy.get(':nth-child(5) > .badge')
    }
    getMaximumSalary() {
        return cy.get(':nth-child(8) > .badge')
    }
}

export default SalariesPage