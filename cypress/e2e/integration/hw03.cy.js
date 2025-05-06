/// <reference types="cypress" />

describe('FrontEnd Test - Login', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/form-elements')
    })

    it('[TC01] Validate the login form', () => {
        // Validate the heading is “Contact Us”
        cy.get('.is-size-3').should('have.text', 'Contact Us');

        // Validate the address
        cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');

        // Validate the email
        cy.get('#email').should('have.text', 'info@techglobalschool.com');

        // Validate the phone number
        cy.get('#phone-number').should('have.text', '(224) 580-2150');
    });

    it('[TC02] Validate the Full name input box', () => {
        // Validate that the Full name input box is displayed
        cy.get('input[placeholder*="full name"]').should('be.visible');

        // Validate that the Full name input box is required
        cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'required');

        // Validate that the label of the Full name input box is "Full name *"
        cy.get('label[for="name"]').should('have.text', 'Full name *');

        // Validate that the placeholder of the Full name input box is "Enter your full name"
        cy.get('input[placeholder="Enter your full name"]')
          .should('have.attr', 'placeholder', 'Enter your full name');
    });
});
