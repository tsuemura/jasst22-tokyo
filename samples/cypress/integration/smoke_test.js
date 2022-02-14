describe('スモークテスト', () => {
  it('会員登録して予約してログアウト', () => {
    // テスト対象のサイトにアクセス
    cy.visit("https://hotel.testplanisphere.dev/ja/index.html");

    // 宿泊プランを選択
    cy.contains("宿泊予約").click();

    cy.openReservationPlan("素泊まり");

    cy.wait(1000);
    cy.contains('宿泊日').fill('2022/02/21{esc}')

    cy.getByLabel("宿泊数").fill("7");
    cy.getByLabel("人数").fill("1");
    cy.getByLabel("朝食バイキング").click();
    cy.getByLabel("氏名").fill("ジャスト 太郎");
    cy.getByLabel("確認のご連絡").select("希望しない");
    cy.contains("予約内容を確認する").click();

  })
})
