/// <reference types="Cypress" />

describe('URI', () => {
  before(()=>{
    cy.viewport(1280, 1000)
  })
  let hrefs = []
  it('Do research', ()=>{
    cy.visit('https://www.google.com/')
    cy.get('input[title=Rechercher]').type('ESGI{enter}')
    cy.get('h3').parent('a').each(($el, index, $list)=>{
      hrefs.push($el.attr('href'))
    })
  })

  after(()=>{
    console.log(hrefs)
    cy.writeFile('./links.json', hrefs);
  })

})
