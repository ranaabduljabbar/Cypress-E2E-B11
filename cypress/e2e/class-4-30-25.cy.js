describe('Apple Checkbox Test', () => {
    it('should check and uncheck the Apple checkbox', () => {
      
      cy.get('#apple_check').check().should('be.checked');
  
      cy.get('#apple_check').uncheck().should('not.be.checked');
  
    });
  });

  describe('',() =>{
 cy.visit('url')
  })


  describe('Validate the Contact Us information',()=>{
    berforeach(()=>{
  cy.visit('https://techglobal-training.com/frontend/form-elements')

    })
  it('should display correct Contact Us information', ()=>{
    cy.contains('h1','Contact Us').should('be.visible')
  })

  })
