/// <reference types="cypress" />



describe('TodoApp', () => {
    beforeEach(() => {
      cy.visit('http://todomvc.com/examples/react/')
    })
    
    it('adds 2 items', () => {
        cy.get('.new-todo')
          
          .type('Feed the cat{enter}')
          .type('Watch TV{enter}')
          .type('Clean the room{enter}')
     
        cy.get('.todo-list li').should('have.length', 3)
      })
    })
     
      it('displays two todo items by default', () => {
     
        
      })
         
              
      context('Checked completed', () => {
        beforeEach(() => {
          cy.contains('Feed the cat')
          .parent()
          .find('input[type=checkbox]')
          .check()
        
      })

     it('can filter for completed tasks', () => {
       
        cy.contains('Completed').click()
  
        cy.get('.todo-list li')
          .should('have.length', 1)
          .first()
          .should('have.text', 'Feed the cat')
  
        cy.contains('feed cat').should('not.exist')
      })
          
     context('todo-count', () => {
        it('displays two todo items left', () => {
            cy.contains('Active').click()
             
                cy.get('.todo-list li')
                .should('have.length', 2)
                .first()
            
            })
       
      context('todo-count', () => {
        it('displays clear completed', () => {
            cy.contains('Clear Completed').click()
                     
                cy.get('.todo-list li')
                .should('have.length', 1)
                .first()
                
         })

     context('todo-count', () => {
        it('displays clear completed', () => {
          cy.within(callbackFn)
   
    })

    
    })    
  
        
    })
})  

})
     
      
 