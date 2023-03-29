class CompaniesPage {
    getCompanyPage(companyName) {
        cy.visit(Cypress.env('url') + "/podjetja.php");
        cy.get(".card")
            .find(".card-body")
            .each(($el, index, $list) => {
                const company = $el.find(".card-title").text()
                if (company.includes(companyName)) {
                    cy.wrap($el)
                        .find(".btn")
                        .click()
                    cy.get('h2')
                        .invoke('text')
                        .should('contain', companyName)
                }
            })
    }
}

export default CompaniesPage