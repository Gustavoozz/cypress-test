describe('Template spec:', () => {

  let musicItem

  before('passes', () => {
    cy.visit('/')
  })


  it('Redirect to search screen:', () => {
    cy.get("[href='/Search']").click();

    // Para ele nao quebrar:
    cy.scrollTo("top")
  });

  it('Find a specific music:', () => {
    cy.get("[data-testid='campoBusca']").type("Margiela Split Toes Westside Gunn")

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.scrollTo("top")
  });

  it('Select music:', () => {
    cy.wait(1500)
    musicItem = cy.get("[aria-label='music-item']").first()
    musicItem.click()
    // cy.get("[aria-label='music-item']").filter('Westside Gunn').contains('327').click()
    cy.scrollTo("top")
  });

  
  it('Click on like button', () => {
    // if (musicItem) {
    //     musicItem.then((item) => {
    //   item.find("[data-testid='icon-button']").click()
    // })
    // }

    cy.get(musicItem).get("[data-testid='icon-button']").first().click()
  });
})