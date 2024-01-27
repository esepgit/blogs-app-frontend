describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      username: "crimson",
      name: "Klee",
      password: "pyro"
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:5173')
  })

  it('Login form is show', function() {
    cy.contains('Log in to application')
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.get("#username").type("crimson");
      cy.get("#password").type("pyro");
      cy.contains("login").click();

      cy.contains("Klee logged in");
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('pedro')
      cy.get('#password').type('piedra')
      cy.contains('login').click()

      cy.contains("wrong username or password");
      cy.get(".notification").should(
        "have.css",
        "backgroundColor",
        "rgb(51, 181, 255)"
      );
    })
  })
})