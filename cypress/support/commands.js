// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createIssue', (name, priority) => {
    cy.visit('https://jira-clone.mad.itera.no/project/board');

    cy.get('[data-testid="icon:plus"]').click(); 
    
    cy.get('[data-testid="modal:issue-create"]').within(() => {
        
        cy.get('input[name="title"]').type(name);
        
        cy.get('[data-testid="form-field:description"]').type('a sick description');

        cy.get('[data-testid="select:userIds"]').click() 
        .parent() 
        .within(() => {
            cy.contains('Pickle Rick').click();
        }); 

        cy.get('[data-testid="form-field:priority"]').click()
        .within(() => {
            cy.get('input[placeholder="Search"]').type(priority); // This is not actually needed ...
            // cy.contains(priority).click(); I don't really like the us of this here
            cy.get(`[data-testid="select-option:${priority}"]`).click(); 

        });
        
        cy.get('button[type="submit"]').click();
    });  
    
    cy.contains(name).should('be.visible'); 
});