const title = "a suiting title";

it("Change priority of issue", () => {

    cy.createIssue(title, 'Highest');

    cy.contains(title).click();

    cy.get('[data-testid="select:priority"]').click()
        .parent()
        .within(() => {
            cy.get('[data-testid="select-option:Medium"]').click();  
        });
    
    cy.get('body').type('{esc}'); // Closing the modal
});