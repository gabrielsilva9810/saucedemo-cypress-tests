describe('Sorting Tests', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.loginPageSuccess()
    })

    it('Must sort: Z to A', () => {
        cy.sortBySelectZtoA()
    })

    it('Must sort: Low to High', () => {
        cy.sortBySelectLowToHigh()
    })

    it('Must sort: High to Low', () => {
        cy.sortBySelectHighToLow()
    })
})