import BasePage from '../pageObjects/BasePage'
import IndexPage from '../pageObjects/IndexPage'
import SalariesPage from '../pageObjects/SalariesPage'
import SubmitSalaryPage from '../pageObjects/SubmitSalaryPage'
import CompaniesPage from '../pageObjects/CompaniesPage'



describe('First Test Suite', () => {
  const basePage = new BasePage;
  const indexPage = new IndexPage;
  const salariesPage = new SalariesPage;
  const submitSalaryPage = new SubmitSalaryPage;
  const companiesPage = new CompaniesPage;

  let dataTc2;
  let dataTc3;
  let dataTc5;

  before(() => {
    cy.fixture('tc02_data').then((testdata) => {
      dataTc2 = testdata
    })
    cy.fixture('tc03_data').then((testdata) => {
      dataTc3 = testdata
    })
    cy.fixture('tc05_data').then((testdata) => {
      dataTc5 = testdata
    })
  })

  it('TC 01 Test navbar items', () => {
    cy.visit(Cypress.env('url') + "/");
    basePage.getNavigationItem().as('navItemLocator')
    cy.get('@navItemLocator').should('have.length', 4)
    basePage.getReviewsLink().should('have.class', 'disabled')
    cy.verifyLinkText('@navItemLocator', 'ZAČETNA', 0)
    cy.verifyLinkText('@navItemLocator', 'PLAČE', 1)
    cy.verifyLinkText('@navItemLocator', 'MNENJA', 2)
    cy.verifyLinkText('@navItemLocator', 'PODJETJA', 3)
    cy.verifyLinkText('.btn', 'VNESI PLAČO')
  })
  it('TC 02 Enter salary', () => {
    let net = dataTc2.net;
    let gross = dataTc2.gross;
    cy.setCookie('PHPSESSID', Cypress.env('cookie')) // I need to inject cookie :(
    cy.verifyCookie()
    cy.visit(Cypress.env('url') + "/vnos.php");
    submitSalaryPage.getCompanyDropdown()
      .select(dataTc2.company, { force: true })
      .should('have.value', dataTc2.company)
    submitSalaryPage.getLocationDropdown()
      .select(dataTc2.location, { force: true })
      .should('have.value', dataTc2.location)
    submitSalaryPage.getPositionDropdown()
      .select(dataTc2.position, { force: true })
      .should('have.value', dataTc2.position)
    submitSalaryPage.getSeniorityDropdown()
      .select(dataTc2.seniority, { force: true })
      .should('have.value', dataTc2.seniority)
    submitSalaryPage.getNetPayField()
      .type(net, { force: true })
      .should('have.value', dataTc2.net)
    submitSalaryPage.getGrossPayField()
      .type(gross, { force: true })
      .should('have.value', dataTc2.gross)
    submitSalaryPage.getSubmitButton()
      .click()
    // what if net entered is bigger than gross?
    if (net > gross) {
      // well then we should get an alert with proper message!
      cy.on('window:alert', (str) => {
        expect(str)
          .to
          .equal('Napačen vnos!')
      })
    } else
      submitSalaryPage.getSubmitSalaryForm()
        .should('not.exist')
  })
  it('TC 03 Find company', () => {
    dataTc3.company.forEach(company => {
      companiesPage.getCompanyPage(company)
    });
  })
  it('TC 04 Dropdown', () => {
    cy.visit(Cypress.env('url') + "/");
    indexPage.getDropdown().select('Sportradar').should('have.value', 'Sportradar')
  })
  it('TC 05 Verify table values are correct', () => {
    dataTc5.company.forEach(company => {
      cy.visit(Cypress.env('url') + "/place.php?podjetje=" + company);
      let salaries = [];
      let salariesSum = 0;
      salariesPage.getSalary().each(($el, index, $list) => {
        salaries.push(parseInt($el.text()))
        salariesSum += parseInt($el.text())
      })
      // Average salary
      salariesPage.getAverageSalary().then(($num) => {
        expect(parseInt(salariesSum / salaries.length))
          .equal(parseInt($num.text()))
      })
      // Minimum salary
      salariesPage.getMinimumSalary().then(($num) => {
        expect(Math.min(...salaries))
          .equal(parseInt($num.text()))
      })
      // Maximum salary
      salariesPage.getMaximumSalary().then(($num) => {
        expect(Math.max(...salaries))
          .equal(parseInt($num.text()))
      })
    });
  })


})