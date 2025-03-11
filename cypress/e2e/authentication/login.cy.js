describe('Login Test', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('Must login successfully', () => {
    cy.loginPageSuccess()
    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
  })

  it('Should display an error message with invalid data', () => {
    cy.loginPageInvalid()
    cy.get('[data-test="error"]').should('be.visible')
  })

})