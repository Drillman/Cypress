let links = require('../../../links')
describe('Take screenshots', ()=>{
  links.forEach((link) =>{
    it(`Screenshot for ${link}`, ()=>{
      cy.visit(link,{failOnStatusCode: false})
      cy.screenshot(`captures/${link}`, {capture:'viewport'})
      cy.get('body').should('contain','ESGI')
    })
  })
})