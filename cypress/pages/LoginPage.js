class LoginPage {

    username_textbox = '[data-test="username"]'
    password_textbox = '[data-test="password"]'
    login_button = '[data-test="login-button"]'
    result = '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'
    invalid_message = '[data-test="error"]'

    enterUserName(username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }

    verifyLogin(value){
        cy.url().should('contains', value)
    }

    verifyInvalidMessage(value){
        cy.get(this.invalid_message).should('have.text', value)
    }
}

export const loginPage =  new LoginPage()