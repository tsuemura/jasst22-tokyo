
## ディレクトリ構成

フォルダ名|説明
---|---
marpstyle|スライドのテーマファイル（別リポジトリ）
samples|サンプルコード
slides|スライド

## スライドの追加とビルド

リポジトリを `--recursive` オプション付きでcloneします。 `--recursive` を付けないとテーマが適用されません。

```bash
$ git clone --recursive https://github.com/tsuemura/jasst22-tokyo.git
```

スライドは `slides/index.md` です。追加することもできます。[Marp](https://marp.app/) を使用しており、プレーンなMarkdownで書けます。

ローカルでスライドを生成するには [Marp for VSCode](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) を利用してください。

## デプロイ

main ブランチに push すると、GitHub Pagesに自動的にデプロイされます。

`slides` ディレクトリ内のスライドは自動的に全てビルドされます。
