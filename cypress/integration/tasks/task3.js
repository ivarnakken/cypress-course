/// <reference types="cypress" />

describe('jira clone', () => {

  const title = "a suiting title";
  const text = "a nice comment";

  beforeEach(() => {
    cy.createIssue(title, 'Highest');
  })

  afterEach(() => {
    cy.deleteIssue(title);
  })

  it('should be able to create comment', () => {
    cy.createComment(text, title);
  })

  it('should be able to delete comment', () => { 
    cy.createComment(text, title);
    cy.deleteComment(text, title);
  })  

  it('should be able to edit comment', () => {
    cy.createComment(text, title);
    cy.editComment(text, 'new text', title);
  })

})