describe('Create Equipment', () => {
    it('should create new equipment adn display it in the list', () => {
        cy.visit('/'); // Adjust the URL if necessary
        cy.get('input[name="name"]').type('Test Equipment');
        cy.get('input[name="category"]').type('Test Category');
        cy.get('button[type="submit"]').click();
        cy.contains('Test Equipment').should('be.visible');
        cy.contains('Test Category').should('be.visible');
    });
});