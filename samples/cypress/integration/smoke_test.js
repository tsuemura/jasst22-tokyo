describe("スモークテスト", () => {
  context("翌月1日から7日間予約する", () => {
    const dayjs = require("dayjs");
    const checkInDate = dayjs().add(1, "month").startOf("month");
    const checkOutDate = checkInDate.add(7, "day");

    it("会員登録して予約してログアウト", () => {
      // 1. https://hotel.testplanisphere.dev/ja/ を開く
      cy.visit("https://hotel.testplanisphere.dev/ja/index.html");

      // 2. メニューから「宿泊予約」を選択
      cy.contains("宿泊予約").click();

      // 3. 宿泊プラン一覧から「お得な特典付きプラン」の「このプランで予約」を選択
      cy.openReservationPlan("お得な特典付きプラン");

      cy.wait(1000);

      // 4. 宿泊日を翌月1日に設定
      cy.getByLabel("宿泊日").fill(`${checkInDate.format("YYYY/MM/DD")}{esc}`);

      // 5. 宿泊数を7泊に設定
      cy.getByLabel("宿泊数").fill("7");

      // 6. 人数を2に設定
      cy.getByLabel("人数").fill("2");

      // 7. 朝食バイキング、昼からチェックインプラン、お得な観光プランを選択
      cy.getByLabel("朝食バイキング").check();
      cy.getByLabel("昼からチェックインプラン").check();
      cy.getByLabel("お得な観光プラン").check();

      // 8. 氏名に「テスト太郎」を入力
      cy.getByLabel("氏名").fill("テスト 太郎");

      // 9. 確認のご連絡をメールに設定
      cy.getByLabel("確認のご連絡").select("メールでのご連絡");

      // 10. メールアドレスにhoge@example.comを設定
      // cy.getByLabel("メールアドレス").fill("hoge@example.com");
      cy.get("input#email").fill("hoge@example.com");

      // 11. ご要望・ご連絡事項に「テスト」と入力
      cy.getByLabel("ご要望・ご連絡事項等ありましたらご記入ください").fill(
        "テスト"
      );

      // 12. 予約内容を確認するボタンを選択
      cy.contains("予約内容を確認する").click();

      // 13. 宿泊予約確認画面で、以下を確認
      //     1.  合計金額が121,000円であること
      //     2.  期間、人数、追加プラン、お名前、確認のご連絡、ご要望・ご連絡が入力通りになっていること

      cy.contains("合計").should("contain", "123,000円");
      cy.contains("お得な特典付きプラン");
      cy.contains("期間")
        .next()
        .should(
          "contain",
          `${checkInDate.format("YYYY年M月D日")} 〜 ${checkOutDate.format(
            "YYYY年M月D日"
          )} 7泊`
        );
      cy.contains("人数").next().should("contain", "2名様");
      cy.contains("追加プラン").next().should("contain", "朝食バイキング");
      cy.contains("追加プラン")
        .next()
        .should("contain", "昼からチェックインプラン");
      cy.contains("追加プラン").next().should("contain", "お得な観光プラン");
      cy.contains("お名前").next().should("contain", "テスト 太郎様");
      cy.contains("確認のご連絡")
        .next()
        .should("contain", "メール：hoge@example.com");
      cy.contains("ご要望・ご連絡事項等").next().should("contain", "テスト");

      // 14. この内容で予約するボタンを選択し、以下を確認
      //     1.  予約が完了しましたダイアログが表示されること
      cy.contains("この内容で予約する").click();
      cy.wait(2000);
      cy.contains("予約を完了しました");
    });
  });
});
