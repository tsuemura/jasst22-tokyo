describe('スモークテスト', () => {
  it('会員登録して予約してログアウト', () => {
    cy.visit("https://hotel.testplanisphere.dev/ja/index.html");
    cy.get('nav').within(() => {
      cy.contains('会員登録').click()
    })
  })
})
