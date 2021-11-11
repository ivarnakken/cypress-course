/// <reference types="cypress" />

describe('demo', () => {
  it('test search bar', () => {
      cy.visit('https://jira-clone.mad.itera.no/project/board');

      cy.get('[data-testid="icon:plus"]').click(); 
      
      cy.get('[data-testid="modal:issue-create"]').within(() => {
        
        cy.get('input[name="title"]').type('a suiting title');
        
        cy.get('[data-testid="form-field:description"]').type('a sick description');

        cy.get('[data-testid="select:userIds"]').click() 
          .parent() 
          .within(() => {
            cy.contains('Pickle Rick').click();
          }); 

        cy.get('[data-testid="form-field:priority"]').click()
          .within(() => {
            cy.get('input[placeholder="Search"]').type('Highest'); // This is not actually needed ...
            cy.contains('Highest').click();  
          });
        
        cy.contains('Create Issue').click();         
      });  
    
    cy.contains('a suiting title').should('be.visible');
  
  })  
})