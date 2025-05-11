it('TC - Validate Apple link and window title', () => {
    cy.visit('https://techglobal-training.com/frontend/');
  
    // Click on "Multiple Windows"
    cy.contains('Multiple Windows').click();
  
    // Remove target attribute and click "Apple" link
    cy.contains('Apple')
      .invoke('removeAttr', 'target')
      .click();
  
    // Validate that the page title is "Apple"
    cy.title().should('eq', 'Apple');
  
    // Go back to main page
    cy.go('back');
  
    // Validate title contains "techglobal"
    cy.title().should('include', 'techglobal');
  });