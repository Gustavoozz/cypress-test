describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    // Não é mais necessário pois as configurações de visualização foram configuradas no arquivo "cypress.config.js".
    // cy.viewport("iphone-xr")
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
    cy.get("[aria-label='playlist-item']").contains('Trapperz Brasil').click()
    cy.wait(1000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });


  it('Listar uma musica', () => {
    // Eq = escolher uma opção dentro da playlist:
    cy.get("[aria-label='music-item']").contains('Melhor Vibe').click()

    cy.scrollTo("top")
  });
})