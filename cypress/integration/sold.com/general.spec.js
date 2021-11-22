/// <reference types="cypress" />

describe('TodoApp', () => {
    beforeEach(() => {
      cy.visit('http://todomvc.com/examples/react/')
    })

    it('adds 2 items', () => {
      cy.get('.new-todo')
        
        .type('Feed the cat{enter}')
        .type('Watch TV{enter}')
   
      cy.get('.todo-list li').should('have.length', 2)
    })
  })
   
    it('displays two todo items by default', () => {
   
      
    })
       
    context('New items', () => {
      it('adds 2 items', () => { 
        cy.get('.new-todo')
        .type('Walk the dog{enter}')
        .type('Clean the room{enter}')
      })
  

    })
    
    context('Checked completed', () => {
      beforeEach(() => {
        cy.contains('Walk the dog')
        .parent()
        .find('input[type=checkbox]')
        .check()
      
    })
    it('can filter for completed tasks', () => {
     
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      cy.contains('feed cat').should('not.exist')
    })
    
    it('can delete all completed tasks', () => {
    
      cy.contains('Clear completed').click()

        
      

      cy.contains('Clear completed').should('not.exist')
  })
    
})
