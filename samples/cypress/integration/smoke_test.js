describe('スモークテスト', () => {
  it('会員登録して予約してログアウト', () => {
    
    // テスト対象のサイトにアクセス
    cy.visit("https://hotel.testplanisphere.dev/ja/index.html");

    // 会員登録
    cy.get('nav').within(() => {
      cy.contains('会員登録').click()
    })
    cy.get("form").within(() => {
      cy.getByLabel("メールアドレス").type("jasst21@example.com");
      cy.getByLabel(`パスワード`).type(`P@ssw0rd`);
      cy.getByLabel(`パスワード（確認）`).type(`P@ssw0rd`);
      cy.getByLabel(`氏名`).type(`ジャスト 太郎`);
      cy.getByLabel(`住所`).type(`東京都千代田区千代田1-1-1`);
      cy.getByLabel(`電話番号`).type(`09000000000`);
      cy.getByLabel(`性別`).select(`その他`);
      cy.getByLabel(`生年月日`).type(`1987-03-16`);
      cy.getByLabel(`お知らせを受け取る`).click();
      cy.contains("登録").click();
    });

    // 宿泊プランを選択
    cy.get('nav').within(() => {
      cy.contains('宿泊予約').click()
    })
    cy.getCardByText('素泊まり').within(() => {
      cy.contains('このプランで予約').click()
    })

    // 宿泊予約
    // 予約内容を確認
    // ログアウト

  })
})
