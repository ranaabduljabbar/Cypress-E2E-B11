describe('Apple Checkbox Test', () => {
    it('should check and uncheck the Apple checkbox', () => {
      
      cy.get('#apple_check').check().should('be.checked');
  
      cy.get('#apple_check').uncheck().should('not.be.checked');
  
    });
  });