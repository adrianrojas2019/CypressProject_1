describe('MyTestSuite', () => {

    // Access through Hook - for multiple it blocks
    /*     let userdata
        before(() => {
            cy.fixture('orangehrm1.json').then((data) => {
                userdata = data
            })
        }) */

    it('Data Driven Testing', () => {

        cy.fixture("orangehrm1.json").then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata) => {
                cy.get("input[name='username']").type(userdata.username)
                cy.get("input[name='password']").type(userdata.password)

                cy.get("button[type='submit']").click()
                cy.wait(3000)

                if (userdata.username === 'Admin' && userdata.password === 'admin123') {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected)
                    cy.get('.oxd-userdropdown-tab').click()  //logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()  //logout
                    cy.wait(3000)
                }
                else {
                    cy.get(".oxd-alert-content > .oxd-text")
                        .should('have.text', userdata.expected)
                }
            })
        })
    })
})