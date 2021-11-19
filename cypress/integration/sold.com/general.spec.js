/// <reference types="cypress" />

describe('TodoMVC', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('hides main', () => {
        cy.get('.filters').should('not.exist')
      })

    it('hides footer', () => {
        cy.get('.filters').should('not.exist')
      })
  
       

    it('displays two todo items by default', () => {
        
        it('can add new todo items', () => {
        
            const newItem = 'Feed the cat'
        
          
            cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

            cy.get('.todo-list li')
            .should('have.length', 3)
            .last()
            .should('have.text', newItem)
        })

    })
    it('can filter for completed tasks', () => {
  
        cy.contains('Completed').click()
  
        cy.get('.todo-list li')
          .should('have.length', 0)
          .first()
          .should('have.text', 'Clean the room')
  
        cy.contains('Walk the dog').should('not.exist')
      })
  
    
})