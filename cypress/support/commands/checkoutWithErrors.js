Cypress.Commands.add('checkoutWithMissingData', (data, errorMessage) => {

    if (data.firstName !== null) {
        cy.get('[data-test="firstName"]').type(data.firstName)
    }

    if (data.lastName !== null) {
        cy.get('[data-test="lastName"]').type(data.lastName)
    }

    if (data.postalCode !== null) {
        cy.get('[data-test="postalCode"]').type(data.postalCode)
    }

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', `Error: ${errorMessage}`)
})