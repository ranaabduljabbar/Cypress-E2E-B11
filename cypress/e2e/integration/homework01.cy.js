/// <reference types = "cypress" />

describe('FrontEnd Test - Login', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/form-elements')
    })

    it('[TC01] Validate the login form', () => {
        
//Validate the heading is “Contact Us”
cy.get('.is-size-3').should('have.text', 'Contact Us')

//Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
//Validate the email is “info@techglobalschool.com"
cy.get('#email').should('have.text','info@techglobalschool.com')

//Validate the phone number is “(224) 580-2150”
cy.get('#phone-number').should('have.text','(224) 580-2150')
    })


it('[TC02] Validate the Full name input box', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()

    // 2. Validate that the Full name input box is displayed
    cy.get('input[placeholder*="full name"]').should('be.visible')

    // 3. Validate that the Full name input box is required
    cy.get('[placeholder="Enter your full name"]').should('have.attr','required')

    // 4. Validate that the label of the Full name input box is "Full name *"
    cy.get('[for="name"]').should('have.text', 'Full name *')

    // 5. Validate that the placeholder of the Full name input box is "Enter your full name"
    cy.get('input[placeholder="Enter your full name"]')
    .should('have.attr', 'placeholder', 'Enter your full name');

})

it('[TC03] Validate the Full name input box', () => {
// 1. Navigate to https://techglobal-training.com/frontend/form-elements
// used beforeEach()

// Validate the label is “Gender *”
cy.contains('label', 'Gender *').should('be.visible')

//Validate that the Gender is required
cy.contains('label', 'Female').should('exist');
    cy.contains('label', 'Male').should('exist');
    cy.contains('label', 'Prefer not to disclose').should('exist')

//Validate the options are “Female”, “Male” and “Prefer not to disclose”
cy.get('label').contains('Female').should('exist');
    cy.get('label').contains('Male').should('exist');
    cy.get('label').contains('Prefer not to disclose').should('exist')

//Validate the options are clickable and not selected


//Click on the “Male” option and validate it is selected while the others are not selected


//Click on the “Female” option and validate it is selected while the others are not selected


})
it('[TC04] Validate the Full name input box', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()
   
    //Validate that the Address input box is displayed
    cy.get('#address').should('be.visible')

    //Validate that the Address input box is not required
    cy.get('#address').should('not.have.attr', 'required')

    //Validate that the label of the Address input box is “Address”
    cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');

    //Validate that the placeholder of the Address input box is “Enter your address*”
    
})

it('[TC05] Validate the Full name input box', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()
//Validate that the Email input box is displayed
cy.get('input[type="email"]').first().should('be.visible')

//Validate that the Email input box is required
cy.get('input[type="email"]').first().should('have.attr', 'required')

//Validate that the label of the Email input box is “Email *”
cy.contains('label', 'Email *').should('have.text', 'Email *')

//Validate that the placeholder of the Email input box is “Enter your email”
cy.get('input[type="email"]').first().should('have.attr','placeholder', 'Enter your email')

})
it('[TC06] Validate the Phone input box', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()

//Validate that the Phone input box is displayed
cy.get('input[type="phone"]').first().should('be.visible')

//Validate that the Phone input box is not required
cy.get('input[type="phone"]').first().should('not.have.attr', 'required')

//Validate that the label of the Phone input box is “Phone”
cy.contains('label', 'Phone').should('have.text', 'Phone')

//Validate that the placeholder of the Address input box is “Enter your phone number”
cy.get('input[type="phone"]').first().should('have.attr','placeholder', 'Enter your phone number')
})
it('[TC07] Validate the Phone input box', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()
    
//Validate that the Message text area is displayed
cy.get('textarea').first().should('be.visible')

//Validate that the Message text area is not required
cy.get('textarea').first().should('not.have.attr', 'required')

//Validate that the label of the Message text area is “Message”
cy.contains('label', 'Message').should('have.text', 'Message')

//Validate that the placeholder of the Message text area is “Type your message here…”
cy.get('textarea').first().should('have.attr','placeholder', 'Type your message here...')
})

it('[TC08] Validate the checkbox ', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()

    //Validate the label is “I give my consent to be contacted.”
    cy.contains('label', ' I give my consent to be contacted.').should('have.text', ' I give my consent to be contacted.')
//Validate that the Consent checkbox is required
cy.get('input[type="checkbox"]').first().should('have.attr', 'required')

//Validate that the Consent checkbox is clickable
cy.get('input[type="checkbox"]').first().should('be.enabled')

//Click on the “I give my consent to be contacted.” checkbox and validate it is selected
const checkbox = cy.get('input[type="checkbox"]').first()
    
      checkbox.click().should('be.checked')
      checkbox.click().should('not.be.checked')

})
it('[TC09] Validate the Submit', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()
    //Validate the “SUBMIT” button is displayed
    cy.get('button').should('be.visible')

    //Validate the “SUBMIT” button is clickable
    cy.get('button').should('not.be.disabled')

    //Validate that the button text is “SUBMIT”
    cy.get('button').first().should('have.text', 'SUBMIT')
})
it('[TC10] Validate the form submission', () => {
    // 1. Navigate to https://techglobal-training.com/frontend/form-elements
    // used beforeEach()

    //Enter a first name
    cy.get('input[placeholder="Enter your full name"]').first().should('have.attr','placeholder', 'Enter your full name')
    
    //Select a gender
    
   //Enter an address
   cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
   
   //Enter an email
   cy.get('input[type="email"]').first().should('have.attr', 'required')
   //Enter a phone number
   cy.get('input[type="phone"]').first().should('not.have.attr', 'required')
  
   //Enter a message
   cy.get('textarea').first().should('have.attr','placeholder', 'Type your message here...')

  //Select the “I give my consent to be contacted.” checkbox
  cy.get('input[type="checkbox"]').first().should('be.enabled')

  //Click on the “SUBMIT” button
  cy.get('button').should('not.be.disabled')

  //Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
  cy.get('button').first().should('have.text', 'SUBMIT')
})

})

