Cypress.Commands.add('loginPageSuccess', () => {
    cy.fixture('loginData').then((loginData) => {
        cy.get('input[name="user-name"]').type(loginData.valid.username)
        cy.get('input[name="password"]').type(loginData.valid.password)
        cy.get('input[type="submit"]').click()
    })
})

Cypress.Commands.add('loginPageInvalid', () => {
    cy.fixture('loginData').then((loginData) => {
        cy.get('input[name="user-name"]').type(loginData.invalid.username)
        cy.get('input[name="password"]').type(loginData.invalid.password)
        cy.get('input[type="submit"]').click()
    })
})