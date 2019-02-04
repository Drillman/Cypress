/// <reference types="Cypress" />
describe('URI', () => {
  let hrefs = []
  function takeScreenshot(href){
    cy.visit(href).screenshot('captures')
  }
  it('Do research', ()=>{
    cy.visit('https://www.google.com/')
    cy.get('input[title=Rechercher]').type('ESGI{enter}')
    cy.get('div.r > a[href]').each(($el, index, $list)=>{
      console.log($el.attr('href'))
      hrefs.push($el.attr('href'))
      takeScreenshot($el.attr('href'))
    })
  })

  // after(()=>{
  //   console.log(hrefs)
  //   hrefs.forEach((href) => {
  //     takeScreenshot(href)
  //   })
  // })

})
