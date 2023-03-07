//require('cypress-xpath')
describe('Xpath Locators Demo', () => {
    it('Xpath Test', function() {

        cy.visit("https://www.google.com")
        cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input')
    })
})