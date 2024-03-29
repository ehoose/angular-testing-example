describe('Homepage', () => {
  it('receives a mocked response to a REST API request', () => {
    cy.visit('/')
    cy.get('#greeting').should('have.text', 'Hello, John!')
  })

  it('receives a mocked response to a GraphQL API request', () => {
    cy.visit('/')
    cy.contains('button', 'Fetch movies').click()
    cy.get('#movies > li').then((items) => {
      expect(items[0]).to.have.text(
        'The Fellowship of the Ring (Extended Edition)',
      )
      expect(items[1]).to.have.text('Baby Driver')
      expect(items[2]).to.have.text('Star Wars: The Empire Strikes Back')
    })
  })
})
