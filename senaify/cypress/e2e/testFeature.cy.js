describe('template spec', () => {

let musicItem

  it('passes', () => {
    cy.visit('/')
  })

  it('Verificar se esta exibido', () => {
    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  });


  it('Verificar se tem uma lista com as playlist exibida', () => {
    // length.greaterThan > 0: Significa se possui algum item dentro.
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });


  it('Clicar em uma opção de playlist e listar suas músicas', () => {
    // cy.get("[aria-label='playlist-item']").eq(3).click()
    cy.get("[aria-label='playlist-item']").first().click()
    cy.wait(1000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });


  it('Listar uma musica', () => {
    // Eq = escolher uma opção dentro da playlist:
    cy.get("[aria-label='music-item']").first().click()

    cy.scrollTo("top")
  });


  it('Return to list', () => {
    cy.wait(2000)

    cy.visit('/')
    
  });

  
  it('Click on second playlist', () => {
    cy.get("[aria-label='playlist-item']").eq(1).click()
    cy.wait(1000)
  });


  it('Click on the first music', () => {
    cy.get("[aria-label='music-item']").first().click()
    cy.wait(2000)
  });

  it('Return to list', () => {
    cy.wait(2000)

    cy.visit('/')
    
  });




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


  it('Verificar musica na tela de favoritos', () => {
    cy.get("[href='/Favorites']").click();

    // Para ele nao quebrar:
    cy.scrollTo("top")
  });



  it('Selecionar na musica favoritada anteriormente', () => {
    cy.get("[aria-label='music-item']").contains('Margiela Split Toes')
    cy.wait(1000)
  });
})

  // it('Go to favorite', () => {
  //   cy.get("[href='/Favorites']").click();

  //   // Para ele nao quebrar:
  //   cy.scrollTo("top")
  // });

  // it('Verify the list', () => {
  //   // length.greaterThan > 0: Significa se possui algum item dentro.
  //   cy.wait(2000)
  //   cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  // });
