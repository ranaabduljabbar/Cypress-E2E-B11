/// <reference types = "cypress" />

describe('FrontEnd Test - Login', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })

    it('[TC01] Validate the login form', () => {
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
       it('[TC02] Validate the login form', () => {

        //1-Navigate to https://techglobal-training.com/frontend/login
       cy.get('#username').type('TechGlobal')
        
        // Enter the password as “Test1234”
        cy.get('#password').type('Test123')

        //Click on the “LOGIN” button
        cy.get('#login_btn').click()

        //Validate the success message is displayed as “You are logged in”
        

        //Validate the logout button displayed with the text “LOGOUT”
        cy.get('button').should('be.visible')
       })
it('[TC03] Validate the login form', () => {

    //1-Navigate to https://techglobal-training.com/frontend/login

cy.get('#username').type('TechGloba')

//Enter the password as “Test1234”
cy.get('#password').type('Test1234')

//Click on the “LOGIN” button
cy.get('#login_btn').click()

//Click on the “LOGOUT” button
cy.get('#login_btn').click()

//Validate that the login form is displayed
cy.get('#login_btn').should('have.text', 'LOGIN')
})

it('[TC04] Validate the login form', () => {

    //1-Navigate to https://techglobal-training.com/frontend/login

//Click on the “Forgot Password?” link
cy.get('a[href="/frontend/login"]').click()

//Validate that the modal heading “Reset Password” is displayed
cy.get('#sub_heading').should('have.text','Reset Password')

//Validate that the close button is displayed
cy.get('button[aria-label="close"]').should('be.visible')

//Validate that the email input box is displayed
cy.get('#email').should('be.visible')

//Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
cy.get('label[for="email"]').first().should('have.text',"Enter your email address and we'll send you a link to reset your password. ")

//Validate the “SUBMIT” button is displayed
//Validate the “SUBMIT” button is clickable
//Validate that the button text is “SUBMIT”
cy.get('#submit')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.text', 'SUBMIT')


    })
    it('[TC05] Validate the login form', () => {

        //1-Navigate to https://techglobal-training.com/frontend/login

// Click on the “Forgot Password?” link
cy.get('a[href="/frontend/login"]').click()

//Validate that the “Reset Password” modal is displayed
cy.get('#sub_heading').should('have.text','Reset Password')

//Click on the close button
cy.get('button.delete[aria-label="close"]').click()
//Validate that the “Reset Password” modal is closed
 cy.get('div.modal').should('not.exist')

})
it('[TC06] Validate the login form', () => {
        //1-Navigate to https://techglobal-training.com/frontend/login

       // Click on the “Forgot Password?” link
       cy.contains('Forgot Password?').click();
        //Enter an email
        //cy.get('input[type="email"]').should('exist')

        //Click on the “SUBMIT” button
        cy.contains('SUBMIT').click()
        
        //Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button
        cy.contains('reset your password').should('be.visible')

})

it('[TC07] Validate the login form', () => {
    //1-Navigate to https://techglobal-training.com/frontend/login
    //Leave username empty
     cy.get('#username').should('have.value', '')
    //Leave password empty
    cy.get('#password').should('have.value', '')
    //Click on the “LOGIN” button
    cy.contains('LOGIN').click()
   // Validate the failure message is displayed as “Invalid Username entered!” above the form
   cy.get('#error_message').should('be.visible')
})
it('[TC08] Validate the login form', () => {
    //1-Navigate to https://techglobal-training.com/frontend/login

    //Enter the username as “John”
    cy.get('#username').should('not.have.value', 'John')

    //Enter the password as “Test1234”
    cy.get('#password').should('not.have.value', 'Test1234')

    //Click on the “LOGIN” button
    cy.get('#login_btn').should('be.visible')

    //Validate the is displayed as “Invalid Username entered!” above the form
    cy.get('#login_btn').click()
})
it('[TC09] Validate the login form', () => {
    //1-Navigate to https://techglobal-training.com/frontend/login

    //Enter the username as “TechGlobal”
    cy.get('#username').should('not.have.value', 'TechGlobal')

    //Enter the password as “1234”
    cy.get('#password').should('not.have.value', '1234')

    //Click on the “LOGIN” button
    cy.get('#login_btn').should('be.visible')
    //Validate the failure message is displayed as “Invalid Password entered!” above the form
    cy.get('#login_btn').click()
})

it('[TC10] Validate the login form', () => {
    //1-Navigate to https://techglobal-training.com/frontend/login
//Enter the username as “John”
cy.get('#username').should('not.have.value', 'John')

//Enter the password as “1234”
cy.get('#password').should('not.have.value', 'Test1234')

//Click on the “LOGIN” button
cy.get('#login_btn').should('be.visible')

//Validate the failure message is displayed as “Invalid Username entered!” above the form
cy.get('#login_btn').click()
})
})

