describe('Check UI Elements', function() {

    it('Checking Radio Buttons', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //cy.get('input#male').should('be.visible')  //tag optional = input
        // selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get('#female').should('not.be.checked')
    })
    it('Checking Check Boxes', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        //visibility of check boxes
        /* cy.get('#monday').should('be.visible')

        // Selecting single check box - 
        cy.get('#monday').check().should('be.checked')
        //Unselecting checkbox
        cy.get('#monday').uncheck().should('not.be.checked') */
        //selecting all check boxes
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        //select first and last checkbox
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
        
    })
})