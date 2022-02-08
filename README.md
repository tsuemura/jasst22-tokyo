# JaSST'22 Tokyo 60分で学ぶE2Eテスト

## これは何

JaSST'22 Tokyoで発表する予定のスライド&サンプルコードです。

## ディレクトリ構成

フォルダ名|説明
---|---
marpstyle|スライドのテーマファイル（別リポジトリ）
samples|サンプルコード
slides|スライド

## スライドの追加とビルド

リポジトリを `--submodule` オプション付きでcloneします。 `--submodule` を付けないとテーマが適用されません。

```bash
$ git clone --recursive https://github.com/tsuemura/jasst22-tokyo.git
```

スライドは `slides/index.md` です。追加することもできます。[Marp](https://marp.app/) を使用しており、プレーンなMarkdownで書けます。

ローカルでスライドを生成するには [Marp for VSCode](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) を利用してください。

## デプロイ

main ブランチに push すると、GitHub Pagesに自動的にデプロイされます。

`slides` ディレクトリ内のスライドは自動的に全てビルドされます。


