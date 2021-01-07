/// <reference types="cypress" />

describe('Getting commit history', () => {
  it('Displays the commits on a list', () => {
    cy.visit('http://localhost:3000');

    cy.request(
      'https://api.github.com/repos/brunojacobss/FTF-CommitHistory/commits'
    );

    cy.contains(':package: Add react-bootstrap and cypress package');
  });
});
