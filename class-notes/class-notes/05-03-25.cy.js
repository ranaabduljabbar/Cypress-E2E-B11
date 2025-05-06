
it("Checkbox & Radio Buttons - check() 2", () => {
    /**
     * 1. Check on the Tesla checkbox button
     * 2. Then Validate its checked
     * 3. Uncheck the Tesla checkbox button
     * 4. Validate its unchecked
     */
  });

  describe('Apple Checkbox Test', () => {
    it('should check and uncheck the Tesla checkbox', () => {
      
      cy.get('#tesla_check').check().should('be.checked');
  
      cy.get('#tesla_check').uncheck().should('not.be.checked');

      cy.get('#java_radio').should(before.visible)
      cy.get('#js_radio')
  
    });
  });



