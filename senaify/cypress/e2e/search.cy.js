describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })


  it('Redirecionar para a tela de busca', () => {
    cy.get("[href='/Search']").click();

    // Para ele nao quebrar:
    cy.scrollTo("top")
  });

  it('Procurando uma musica especifica', () => {
    cy.get("[data-testid='campoBusca']").type("327 Westside Gunn")

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.scrollTo("top")
  });

  it('Select music', () => {
    cy.get("[aria-label='music-item']").contains('327').click()
  });
})