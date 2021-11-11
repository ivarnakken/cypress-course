/// <reference types="cypress" />

describe('demo', () => {
  it('test search bar', () => {
      cy.visit('https://jira-clone.mad.itera.no/project/board');
      cy.get('[data-testid="icon:search"]').parent().get('input').type('hello world');
  })  
})