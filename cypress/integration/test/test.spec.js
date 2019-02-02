/// <reference types="Cypress" />
context('URI', () => {
  beforeEach(function () {
    cy.visit('https://www.google.com/')
  })
  it('Do research', function(){
    cy.get('input[title=Rechercher]').type('ESGI{enter}')
    cy.get('div.r > a').its('href').then((href)=>{
      console.log(href)
    })
  })
})
