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

/// <reference types = "cypress" />

describe('FrontEnd Test - Login', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })
    it.only('[TC02] Validate the login form', () => {

        //1-Navigate to https://techglobal-training.com/frontend/login

       //2-Enter the username as “TechGlobal”
       cy.get('#username').type('TechGlobal')
        
        // Enter the password as “Test1234”
        cy.get('#password').type('Test123')

        //Click on the “LOGIN” button
        cy.get('#login_btn').click()

        //Validate the success message is displayed as “You are logged in”
        

        //Validate the logout button displayed with the text “LOGOUT”
        cy.get('button').should('be.visible')

//Test Case -03
//Enter the username as “TechGlobal”
cy.get('#username').type('TechGloba')

//Enter the password as “Test1234”
cy.get('#password').type('Test1234')

//Click on the “LOGIN” button
cy.get('#login_btn').click()

//Click on the “LOGOUT” button
cy.get('#login_btn').click()

//Validate that the login form is displayed
cy.get('#login_btn').should('have.text', 'LOGIN')

// Test Case -04
//Click on the “Forgot Password?” link
cy.get('a[href="/frontend/login"]').click()

//Validate that the modal heading “Reset Password” is displayed
cy.get('#sub_heading').should('have.text','Reset Password')

//Validate that the close button is displayed
cy.get('button[aria-label="close"]').should('be.visible')

//Validate that the email input box is displayed
cy.get('#email').should('be.visible')
//Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”


//Validate the “SUBMIT” button is displayed

//Validate the “SUBMIT” button is clickable

//Validate that the button text is “SUBMIT”

    })
})







