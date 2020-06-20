describe('Inputs and submit button', () => { // grouping several tests that are related
    it('can navigate to the site', () => { // this is the test
        // remote control operation
        cy.visit('http://localhost:3000/Pizza')

        // assertion
        cy.url().should('include', 'http://localhost:3000/Pizza')
    })
    it('submit button should be disabled', () => {
        cy.get('button#submitBtn').should('be.disabled')
    })
    it('can type text for a name', () => { // THIRD TEST
        cy.get('input[name=name]')
            .type('brian')
            .should('have.value', 'brian')
    })
    it('can type in the instructions box', () => {
        cy.get('input[name=instructions]')
            .type('instructions')
            .should('have.value', 'instructions')
    })
    it('ingredients checks', () => {
        cy.get('input[name=pepperoni]')
            .check()
        cy.get('input[name=onions]')
            .check()
        cy.get('input[name=peppers]')
            .check()
        cy.get('input[name=bacon]')
            .check()
    })
    it('submit form test', () => {
        cy.get('button#submitBtn')
            .click()
    })

})
