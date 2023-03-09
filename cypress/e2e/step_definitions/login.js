import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
//const loginPage = require("../../pages/LoginPage")
import {loginPage} from '@pages/LoginPage'

Given('A user opens the login page', ()=>{
    cy.visit('/')
});

When('A user enter the username {string}', (username)=>{
    loginPage.enterUserName(username)
});

When('A user enter the password {string}', (password)=>{
    loginPage.enterPassword(password)
});

When('A user clicks on the login button', ()=> {
    loginPage.clickLogin()
});

Then('the url will contains the inventory subdirectory', ()=>{
    loginPage.verifyLogin('/inventory.html')
});

Then('A user will be receiving a failed message', ()=>{
    loginPage.verifyInvalidMessage('Epic sadface: Sorry, this user has been locked out.')
});