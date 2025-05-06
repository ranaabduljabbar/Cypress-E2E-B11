

  // <reference types="cypress"/>

describe("Cypress Actions", () => {
    beforeEach(() => {
      cy.contains(".card", "HTML Elements").click();
    });
  
    /**
     * Visit the techglobal frontend page
     * Click and navigate to Html Elements page
     * Click on the Register button on the Html Elements Page
     * Validate "You clicked on "Register" text is visible
     * And click on the "Sign in" button
     * Validate "You clicked on "Sign in"" text is visible
     */
    

    it("Click Action - click()", () => {
     
      cy.contains("button", "Register").click();
  
      
      cy.contains('You clicked on "Register"').should("be.visible");
  
      
      cy.contains("button", "Sign in").click();
  
      cy.contains('You clicked on "Sign in"').should("be.visible");
    });
  });
   
  