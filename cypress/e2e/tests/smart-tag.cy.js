describe('Smart Tag Component', () => {
    beforeEach(() => {
        cy.visit('/smart-tag.html');
    });

    it('devrait afficher le tag au survol du bouton "See more"', () => {
        cy.contains('div', 'Lorem ipsum').should('not.be.visible');

        cy.contains('div', 'See more').trigger('mouseover');

        cy.contains('div', 'Lorem ipsum').should('be.visible');
    });

    it('devrait faire disparaître le tag à la sortie du survol', () => {
        cy.contains('div', 'See more').trigger('mouseover');
        cy.contains('div', 'Lorem ipsum').should('be.visible');

        cy.get('body').trigger('mouseover', { force: true, bubbles: true });

        cy.wait(300);

        cy.contains('div', 'Lorem ipsum').should('not.be.visible');
    });
});