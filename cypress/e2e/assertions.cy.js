require('cypress-xpath')
describe("Assertions Demo", function () {
    it("implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contains', 'orangehrm')

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding').should('be.visible')
        cy.get('.orangehrm-login-branding').should('exist')

        cy.xpath('//a').should('have.length', '5')

        cy.get('input[placeholder="Username"]').type("Admin")

    })

    it("explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        let expName = "Paul Collings"

        cy.get('.oxd-userdropdown-name').then((x) => {
            let actName = x.text()
            // BDD Style
            expect(actName).to.equal(expName)
            //TDD Style
            assert.equal(actName, expName)
            assert.notEqual(actName, expName)
        }
        )
    })
})