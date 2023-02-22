/// <reference types="cypress" />

it('Google Search', function(){

     cy.visit('https://google.com')
     cy.get('.gLFyf').type('Automation step by step{Enter}')
     //cy.contains('Buscar con Google').click()
    cy.wait(2000)
     cy.contains('Videos').click()

})