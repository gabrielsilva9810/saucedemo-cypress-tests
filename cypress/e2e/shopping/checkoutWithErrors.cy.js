describe('Checkout tests with errors', () => {
  let paymentData

  before(() => {
    cy.fixture('paymentData').then((data) => {
      paymentData = data
    })
  })

  beforeEach(() => {
    cy.visit("/")
    cy.loginPageSuccess()
    cy.addProductToCart()
  })

  it('Should display an error when trying to proceed without filling in the name', () => {
    cy.checkoutWithMissingData(paymentData.invalidNotFirstName, 'First Name is required')
  })

  it('Should display an error when trying to proceed without filling in the lastname', () => {
    cy.checkoutWithMissingData(paymentData.invalidNotLastName, 'Last Name is required')
  })

  it('Should display an error when trying to proceed without filling in the postal code', () => {
    cy.checkoutWithMissingData(paymentData.invalidNotPostalCode, 'Postal Code is required')
  })

})