/// <reference types="cypress" />


describe('Comprar dos productos', () => {
    before(() => {
        cy.visit('/');
        cy.clearAllLocalStorage();
    })

    context('Ingresar con el usuario standard_user', () => {
        it('debe ingresar a la tienda', () => {
            cy.get('#user-name').type("standard_user");
            cy.get('#user-name').should('have.value', 'standard_user');
            cy.get('#password').type("secret_sauce");
            cy.get('#password').should('have.value', 'secret_sauce');
            cy.get('#login-button').click();
        });

        it('debe agregar dos productos al carrito', () => {
            cy.url().should("include", "/inventory.html");
            cy.get('.inventory_item_name')
                .contains('Sauce Labs Backpack')
                .parentsUntil('.inventory_item_description')
                .parent()
                .find('button')
                .focus().click();
            cy.get('div.inventory_item_name')
                .contains('Sauce Labs Fleece Jacket')
                .parentsUntil('.inventory_item_description')
                .parent()
                .find('button')
                .focus().click({});
            cy.get('span.shopping_cart_badge').should('contain', '2');
        });

        it('debe visualizar el carrito', () => {
            cy.get('div.shopping_cart_container > a').click();
            cy.url().should("include", "/cart.html");
            cy.get('div.cart_item').should('have.length', 2);
        })

        it('debe llenar el formulario de compra', () => {
            cy.get('#checkout').click();
            cy.url().should('include', '/checkout-step-one.html');
            cy.get('input#first-name').type('Rose');
            cy.get('input#first-name').should('have.value', 'Rose');
            cy.get('input#last-name').type('Rosell');
            cy.get('input#last-name').should('have.value', 'Rosell');
            cy.get('input#postal-code').type('123283');
            cy.get('input#postal-code').should('have.value', '123283');
            cy.get('#continue').click();
        })

        it('debe completar la compra', () => {
            cy.url().should('include', '/checkout-step-two.html');
            cy.get('.cart_item').should('have.length', 2);
            cy.get('#finish').click();
            cy.get('.complete-header').should('contain', 'Thank you for your order!');
            cy.get('#back-to-products').click();
        })
    });
})