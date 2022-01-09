describe('Login', () => {
  it('as a premium member', () => {
    cy.visit("https://hotel.testplanisphere.dev/ja/index.html");
    cy.get('nav').within(() => {
      cy.contains('ログイン').click();
    })
    cy.get('form').within(() => {
      cy.contains('メールアドレス').type('ichiro@example.com')
      cy.contains('パスワード').type('password')
      cy.contains('ログイン').click();
    })
  })
})

// describe('Login', () => {
//   it('as a premium member', () => {
//     cy.visit("https://hotel.testplanisphere.dev/ja/index.html");
//     cy.findByRole('navigation').within(() => {
//       cy.findByRole('button', { name: 'ログイン' }).click();
//     })
//     cy.get('form').within(() => {
//       cy.findByLabelText('メールアドレス').type('ichiro@example.com')
//       cy.findByLabelText('パスワード').type('password')
//       cy.findByRole('button', { name: 'ログイン' }).click();
//     })
//   })
// })
