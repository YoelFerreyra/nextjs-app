describe('Testing Home page', () => {
  it('Exist text h1', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Admin Panel');
  });
});
