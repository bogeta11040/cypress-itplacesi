Cypress.Commands.add("verifyLinkText", (locator, linkText, pos) => {
  if (pos == undefined)
    pos = 0;
  cy.get(locator).eq(pos).invoke('text').should('contain', linkText)
})

Cypress.Commands.add('verifyCookie', () => {
  if (Cypress.env('cookie') == "ENTER_HERE") {
    cy.log("You need to provide valid session id.")
    cy.pause()
  }
})