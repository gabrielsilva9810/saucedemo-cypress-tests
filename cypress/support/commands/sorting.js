Cypress.Commands.add('sortBySelectZtoA', () => {
    cy.get('[data-test="product-sort-container"]')
        .should('be.visible')
        .select('za')
})

Cypress.Commands.add('sortBySelectLowToHigh', () => {
    cy.get('[data-test="product-sort-container"]')
        .should('be.visible')
        .select('lohi')
})

Cypress.Commands.add('sortBySelectHighToLow', () => {
    cy.get('[data-test="product-sort-container"]')
        .should('be.visible')
        .select('hilo')
})