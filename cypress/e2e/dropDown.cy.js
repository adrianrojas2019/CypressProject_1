describe("Handle dropdowns Demo", function () {
    it.skip("drop down with select", () => {
        cy.visit("https://zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
            .select('Italy')
            .should('have.value', 'Italy')
    })

    it.skip("drop down without select", () => {
        cy.visit("https://dummyticket.com/dummy-ticket-for-visa-application")

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
    })

    it.skip("Auto suggest dropdown", () => {
        cy.visit("https://www.wikipedia.org")

        cy.get('#searchInput').type('Delhi')
        //capture all the options
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it("Dynamic dropdown", () => {
        cy.visit("https://www.google.com/")
        
        cy.get("input[name='q']").type('cypress automation')
        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',12)

        cy.get('div.wM6W7d>span').each( ($el, index, $list) => {
            if($el.text() == 'cypress automation tutorial' ) {
                cy.wrap($el).click()
            }
        })
        cy.get("input[name='q']").should('have.value', 'cypress automation tutorial')
    })
})