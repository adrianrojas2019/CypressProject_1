class LoginPage {

    username_textbox = '[name="username"]'
    password_textbox = '[name="password"]'
    login_button = '.oxd-button'
    result = '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'

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
        cy.get(this.result).should('have.text', value)
    }
}

export const loginPage =  new LoginPage()