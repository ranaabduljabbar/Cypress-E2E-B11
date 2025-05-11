describe('Booking Page Validation - TechGlobal', () => {
    before(() => {
      cy.visit('https://techglobal-training.com/frontend/booking');
    });
  
    it('Validates radio buttons', () => {
      cy.get('input[type="radio"][value="one-way"]')
        .should('be.visible')
        .and('be.enabled')
        .and('be.checked');
  
      cy.get('input[type="radio"][value="round-trip"]')
        .should('be.visible')
        .and('be.enabled')
        .and('not.be.checked');
    });
  
    it('Validates Cabin Class label and dropdown', () => {
      cy.contains('label', 'Cabin Class').should('be.visible');
      cy.get('select[name="cabin-class"]').should('be.visible');
    });
  
    it('Validates From and To dropdowns', () => {
      cy.contains('label', 'From').should('be.visible');
      cy.get('select[name="from"]').should('be.visible');
  
      cy.contains('label', 'To').should('be.visible');
      cy.get('select[name="to"]').should('be.visible');
    });
  
    it('Validates Depart and Return date pickers', () => {
      cy.contains('label', 'Depart').should('be.visible');
      cy.get('input[name="depart-date"]').should('be.visible');
  
      cy.contains('label', 'Return').should('be.visible');
      cy.get('input[name="return-date"]').should('be.visible').and('be.disabled');
    });
  
    it('Validates passenger count and Passenger 1 defaults', () => {
      cy.contains('label', 'Number of passengers').should('be.visible');
      cy.get('select[name="passenger-count"]').should('be.visible').and('have.value', '1');
  
      cy.contains('label', 'Passenger 1').should('be.visible');
      cy.get('select[name="passenger-1"]').should('be.visible').and('have.value', 'Adult (16-64)');
    });
  
    it('Validates BOOK button', () => {
      cy.get('button[type="submit"]').contains('BOOK')
        .should('be.visible')
        .and('be.enabled');
    });
  });