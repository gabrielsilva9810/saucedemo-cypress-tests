Cypress.Commands.add('addProductToCart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .should('be.visible')
        .click()

    cy.get('[data-test="shopping-cart-badge"]')
        .should('have.text', '1')
        .click()

    cy.url().should('include', '/cart.html')

    cy.get('[data-test="checkout"]')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('completePurchase', () => {
    cy.fixture('paymentData').then((paymentData) => {
        cy.get('[data-test="firstName"]').type(paymentData.valid.firstName)
        cy.get('[data-test="lastName"]').type(paymentData.valid.lastName)
        cy.get('[data-test="postalCode"]').type(paymentData.valid.postalCode)
    })

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
})