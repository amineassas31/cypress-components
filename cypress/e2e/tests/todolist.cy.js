describe('Todolist Component', () => {
    beforeEach(() => {
        cy.visit('/to-do.html');
    });

    it('devrait ajouter 4 todos, supprimer la deuxième, et n\'en laisser que 3', () => {
        const todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

        todos.forEach((todo) => {
            cy.get('input[type="text"]').type(`${todo}{enter}`);
        });

        cy.get('div.flex.items-center.justify-between').should('have.length', 4);

        cy.contains('div.flex.items-center.justify-between', 'Task 2')
            .find('button')
            .click();

        cy.get('div.flex.items-center.justify-between').should('have.length', 3);

        cy.get('div.flex.items-center.justify-between').eq(0).should('contain.text', 'Task 1');
        cy.get('div.flex.items-center.justify-between').eq(1).should('contain.text', 'Task 3');
        cy.get('div.flex.items-center.justify-between').eq(2).should('contain.text', 'Task 4');

        cy.contains('Nombre de tâche(s) : 3');
    });
});