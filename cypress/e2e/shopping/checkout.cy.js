describe('Cart and checkout testing', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.loginPageSuccess()
  })

  it('Must add the product to the cart and complete the purchase', () => {
    cy.addProductToCart()
    cy.completePurchase()
  })
})