/// <reference types = "cypress" />


describe('FrontEnd Test - Login', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })

    it.only('[TC01] Validate the login form', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/login

    // 2. Validate that the username input box is displayed
        cy.get('#username').should('be.visible')

    // 3. Validate that the username input box is not required
        cy.get('#username').should('not.have.attr', 'required' )


    // Validate that the label of the username input box is "Please enter your username"
    cy.get('[for="username"]').should('have.text', 'Please enter your username')


    // Validate that the password input box is displayed
    cy.get('#password').should('be.visible') 

    // Validate that the password input box is not required
    cy.get('#password').should('not.have.attr', 'required')

    // Validate that the label of the password input box is "Please enter your password"
    cy.get('[for="password"]').should('have.text','Please enter your password')

    // Validate the "LOGIN" button is displayed
    cy.get('#login_btn').should('be.visible')

    
     cy.get('#login_btn').should('not.have.attr', 'disabled')

    // Validate that the button text is "LOGIN"
    cy.get('#login_btn').should('have.text', 'LOGIN')

    // Validate the "Forgot Password?" link is displayed
     cy.get('[href="/frontend/login"]').should('have.text','Forgot Password?')

    // Validate that the "Forgot Password?" link is clickable
    cy.get('[href="/frontend/login"]').should('have.attr', 'href','/frontend/login')
   

    // Validate that the link text is "Forgot Password?"
    cy.get('[href="/frontend/login"]').should('have.text', 'Forgot Password?')

    cy.get('[href="/frontend/login"]')
    .should('be.visible')
    .should('have.attr', 'href', '/frontend/login')
    .should('have.text', 'Forgot Password?')

    });

    

})











