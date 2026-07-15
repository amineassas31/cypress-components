describe('Modal Component', () => {
    beforeEach(() => {
        cy.visit('/modal.html');
    });

    it('devrait ouvrir la fenêtre modale au clique sur Display', () => {

        cy.get('div.fixed.top-0.left-0').should('not.be.visible');


        cy.contains('button', 'Display').click();


        cy.get('div.fixed.top-0.left-0').should('be.visible');
    });

    it('devrait fermer la fenêtre modale au clique en dehors', () => {

        cy.contains('button', 'Display').click();
        cy.get('div.fixed.top-0.left-0').should('be.visible');


        cy.get('div.fixed.top-0.left-0').click('topLeft');


        cy.get('div.fixed.top-0.left-0').should('not.be.visible');
    });

    it('devrait contenir un h2 avec le texte "Lorem Ipsum"', () => {
        cy.contains('button', 'Display').click();

        cy.get('div.fixed.top-0.left-0')
            .find('h2')
            .should('be.visible')
            .and('contain.text', 'Lorem Ipsum');
    });
});