/// <reference types="cypress" />

describe('Getting commit history', () => {
  it('Displays the commits on a list', () => {
    cy.visit('http://localhost:3000');

    cy.contains(':tada: Initial commit');

    cy.get('[data-testid=getCommitsButton]').click();

    cy.contains(':package: Add react-bootstrap and cypress package');
  });
});
