describe('Front', () => {
  beforeEach(() => {
    cy.visit('https://trusting-volhard-5aeb7b.netlify.com/');
  });

  it.only('should have 9 cells', () => {
    cy.wait(500);
    cy.get('table').find('td').should('have.length', 9);
  });
});
