/// <reference types="cypress"/>

describe ( "Handling iFrames", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.contains('.card', 'IFrames').click()
    });
  
    it('iFrames', () => {
        cy.get('iframe')
        .its('0.contentDocument.body').should('not.be.empty') // Ensure iframe body is loaded
        .then(cy.wrap) // Wrap to use Cypress commands
        .within(() => {
          cy.get('h1').should('contain.text', 'IFrames')
    })
  })