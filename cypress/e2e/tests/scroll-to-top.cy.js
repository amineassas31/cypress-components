describe('Scroll to Top Component', () => {
    beforeEach(() => {
        cy.visit('/scroll-to-top.html');
    });

    it('devrait afficher le bouton scroll-to-top lorsqu\'on scroll vers le bas', () => {
        cy.get('div.fixed.bottom-3.right-3').should('not.be.visible');

        cy.scrollTo(0, 500);

        cy.get('div.fixed.bottom-3.right-3').should('be.visible');
    });

    it('devrait remonter en haut de la page et faire disparaître le bouton au clique', () => {
        cy.scrollTo(0, 500);
        cy.get('div.fixed.bottom-3.right-3').should('be.visible');

        cy.get('div.fixed.bottom-3.right-3 button').click();

        cy.window().its('scrollY').should('eq', 0);

        cy.get('div.fixed.bottom-3.right-3').should('not.be.visible');
    });
});