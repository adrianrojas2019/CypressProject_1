import {loginPage} from '../pages/LoginPOMPage'

describe('MyTestSuite', () => {

    /*it.only('Fixtures Demo Test', function(){

         cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.fixture('orangehrm.json').then( (data)=>{

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)

            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text', data.expected)
        })
    }) */

    // Access through Hook - for multiple it blocks
    let userdata
    before(() => {
        cy.fixture('orangehrm.json').then((data) => {
            userdata = data
        })
    })

    it('Fixture Demo Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')

        // cy.get("input[name='username']").type(userdata.username)
        // cy.get("input[name='password']").type(userdata.password)
        loginPage.enterUserName(userdata.username)
        loginPage.enterPassword(userdata.password)
        loginPage.clickLogin()
        loginPage.verifyLogin('Dashboard')
        //cy.get("button[type='submit']").click()
        // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            // .should('have.text', userdata.expected)
    })
})