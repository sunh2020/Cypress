/// <reference types="cypress" />



describe('TodoMVC', () => {
    context('adds 2 todos', () => {
     it('sets todo-list')
     
    })
    
    context('completing all todos', () => {
        it('can marked off an item as completed')
        it('can remove completed items')
    })
    
    context('todo-list', () => {
    it('displays two todo items by default', () => {
        cy.get('.todo-list').type('Feed the cat{enter}').type('Clean the room{enter}')
        cy.get('.todo-list li').should('have.length', 2)
    })

    context('without todo-list', () => {
        it('hides any filters and actions', () => {
            cy.visit('/')
            cy.get('.main').should('not.exist')
            cy.get('.footer').should('not.exist')

        })
    })
})       
       
    })


  
       
      
 