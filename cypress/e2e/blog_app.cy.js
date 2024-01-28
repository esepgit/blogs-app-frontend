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

  describe.only('When logged in', function() {
    beforeEach(function() {
      cy.get("#username").type("crimson");
      cy.get("#password").type("pyro");
      cy.contains("login").click();

      cy.contains("new blog").click();
      cy.get("#title").type("Tatata");
      cy.get("#author").type("Klee");
      cy.get("#url").type("www.klee.com");
      cy.get("#btn-create").click();
    })

    it('A blog can be created', function() {
      cy.contains('new blog').click();
      cy.get('#title').type('Dodoco');
      cy.get('#author').type('Klee');
      cy.get('#url').type('www.klee.com');
      cy.get('#btn-create').click();

      cy.contains('Dodoco');
    })

    it('user can click in like', function() {
      cy.get('#btn-view').click();
      cy.get('#btn-like').click();

      cy.contains('likes 1');
    })

    it('user can remove blog', function() {
      cy.get('#btn-view').click();
      cy.get('#btn-remove').click();

      cy.get('html').should('not.contain', 'Tatata')
    })
  })
})