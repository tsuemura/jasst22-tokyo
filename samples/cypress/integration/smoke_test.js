describe("スモークテスト", () => {
  it("会員登録して予約してログアウト", () => {
    // テスト対象のサイトにアクセス
    cy.visit("https://hotel.testplanisphere.dev/ja/index.html");

    // 宿泊プランを選択
    cy.contains("宿泊予約").click();

    cy.openReservationPlan("お得な特典付きプラン");

    cy.wait(1000);
    cy.getByLabel("宿泊日").fill("2022/03/07{esc}");

    cy.getByLabel("宿泊数").fill("7");
    cy.getByLabel("人数").fill("2");
    cy.getByLabel("朝食バイキング").check();
    cy.getByLabel("昼からチェックインプラン").check();

    cy.getByLabel("氏名").fill("テスト 太郎");
    cy.getByLabel("確認のご連絡").select("メールでのご連絡");
    // cy.getByLabel("メールアドレス").fill("hoge@example.com");
    cy.get("input#email").fill("hoge@example.com");
    cy.getByLabel("ご要望・ご連絡事項等ありましたらご記入ください").fill(
      "テスト"
    );
    cy.contains("予約内容を確認する").click();

    cy.contains("合計").should("contain", "121,000円");
    cy.contains("お得な特典付きプラン");
    cy.contains("期間")
      .next()
      .should("contain", "2022年3月7日 〜 2022年3月14日 7泊");
    cy.contains("人数").next().should("contain", "2名様");
    cy.contains("追加プラン").next().should("contain", "朝食バイキング");
    cy.contains("追加プラン")
      .next()
      .should("contain", "昼からチェックインプラン");
    cy.contains("お名前").next().should("contain", "テスト 太郎様");
    cy.contains("確認のご連絡")
      .next()
      .should("contain", "メール：hoge@example.com");
    cy.contains("ご要望・ご連絡事項等").next().should("contain", "テスト");
    cy.contains("この内容で予約する").click();

    cy.wait(2000);
    cy.contains("予約を完了しました");
    cy.contains("閉じる").click();
  });
});
