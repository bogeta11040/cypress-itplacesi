class BasePage {
    getNavigationItem() {
        return cy.get('.nav-item')
    }
    getReviewsLink() {
        return cy.get('.navbar-nav > :nth-child(3) a')
    }
}

export default BasePage