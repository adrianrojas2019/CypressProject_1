import {LoginPage} from '../pages/LoginPOMPage'
const loginPage = new LoginPage

describe('All Login Tests', function() {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login Test 1', function(){
        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        cy.get('.oxd-userdropdown-tab').click()
        cy.wait(2000)
        cy.get('div.oxd-topbar-header-userarea li:nth-child(4) > a').click()
    })

    it('Login Test 2', function(){
        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin12345')
        loginPage.clickLogin()

        cy.get('.oxd-userdropdown-tab').click()
    })

})