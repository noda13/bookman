# 書籍管理アプリ開発

## 導入メッセージ

あなたはスーパーハッカーです
これからmemo.mdに私の作りたいアプリの概要を書いていきます。
段階的に開発を進めていき私の開発スキルを向上させていきたいと思っています。
協力おねがいします。


## 目的と作りたいアプリ

所有している書籍、マンガを間違って同じものを買わないように蔵書管理アプリを作りたい
最初の段階としては家族だけで利用できるアプリでよい
書籍情報をAPIで取得してほぞんできるようにする
任意で画像も表示、保存できるようにする
るスキル

身に着けたいスキルとしては現状で使っているTypeScript+Vue3+Vuetifyを使った技術
併せてCI/CDやインフラ周りの構築についてもできるようになりたい。
デプロイ環境としてはVercelを考えているが無料枠を利用した最新の最適な環境でホスティングできればと考えている。
dockerやk8sなども使いたい。開発はdevcontainerなども使う。

## wsl2 ubuntu

ubuntu / admin


## 書籍管理アプリケーション開発

### アプリケーションの目的

- 所有している書籍やマンガを管理し、同じものを間違って購入しないようにするための蔵書管理アプリケーションを開発します。初期段階では家族だけで利用できるアプリケーションを目指します。

### 主な機能

- 書籍情報をAPIから取得し、保存する機能
- 任意で画像も表示、保存する機能
- スマホでバーコード読み取りして登録できるようにしたい

### 技術スタック

- プログラミング言語: TypeScript
- フレームワーク: Vue3, Nuxt3
- UIフレームワーク: Vuetify3
- バックエンドAPI: loopback4
- パッケージマネージャ: yarn
- データベース: SQLite
- コンテナ化: Docker
- コンテナオーケストレーション: Kubernetes (k8s)
- 開発環境: DevContainer, WSL 2 (Ubuntu)
- デプロイ環境: vercel or github pages
- コードフォーマッター: Prettier
- リンター: ESLint

Vercelを使用してアプリケーションをデプロイします。無料枠を利用し、最新の最適な環境でホスティングを行います。


GitHub Copilot
選択された技術スタックを元に、以下のような開発のステップを提案します。

プロジェクトのセットアップ: Nuxt3とVuetify3を使用したプロジェクトをyarnでセットアップします。
書籍情報を取得するAPIの選定と実装: 適切な書籍情報APIを選定し、そのAPIを叩くための関数を実装します。
データベースの設計と実装: SQLiteを使用して書籍情報を保存するためのデータベースを設計し、実装します。
バーコード読み取り機能の実装: スマホでバーコードを読み取り、その情報をアプリケーションに送信する機能を実装します。
フロントエンドの実装: 書籍情報を表示し、操作するためのUIをVuetify3を使用して実装します。
テストの実装: 各機能が正しく動作するかを確認するためのテストを実装します。
DockerとKubernetesを使用したデプロイ: Dockerでアプリケーションをコンテナ化し、Kubernetesでオーケストレーションします。そして、Vercelを使用してデプロイします。
これらのステップを一つずつ進めていきましょう。まずは、Nuxt3とVuetify3を使用したプロジェクトのセットアップから始めてみてください。

---

## VSCode拡張機能

VSCode拡張機能として入れておいたほうがいいものを先に教えて

### DevContainer内で使用する拡張機能:

- Vetur: Vue.jsプロジェクトのための包括的な拡張機能で、シンタックスハイライト、スニペット、エミット、フォーマット、Linting / Error Checking、IntelliSenseなどを提供します。
- ESLint: コードを分析し問題点を指摘してくれるツールです。Vue.jsやTypeScriptとも連携可能です。
- Prettier - Code formatter: コードのフォーマットを自動で整えてくれる拡張機能です。
- SQLite: SQLiteデータベースを閲覧・編集するための拡張機能です。

### ホスト側で使用する拡張機能:

Remote - Containers: DevContainerを使った開発を支援します。

Docker: Dockerfileやdocker-compose.ymlのシンタックスハイライト、コマンドの補完、Dockerコンテナの管理など、Docker関連の作業を支援します。

- RemoteDevelopment
- Japanese Language Pack
- WSL

---

## プロジェクトのセットアップから始めて

bookman/
├── backend/       # バックエンドのコード
│   ├── src/       # TypeScriptのソースコード
│   ├── test/      # テストコード
│   ├── .devcontainer/ # DevContainerの設定
│   ├── package.json   # パッケージの依存関係
│   └── tsconfig.json  # TypeScriptの設定
└── frontend/      # フロントエンドのコード (Nuxt3 + Vuetify3)
    ├── src/       # TypeScriptのソースコード
    ├── test/      # テストコード
    ├── .devcontainer/ # DevContainerの設定
    ├── package.json   # パッケージの依存関係
    └── nuxt.config.ts # Nuxt3の設定

### backend

LoopBack 4を使用してバックエンドを構築する場合、以下の手順を実行します。

テストを実行します。yarn test コマンドを実行して、テストがすべてパスすることを確認します。

```sh
# LoopBack 4のプロジェクトを作成します。まず、backend ディレクトリに移動します。
cd backend

# LoopBack 4のプロジェクトを作成します。lb4 app コマンドを実行し、プロンプトに従ってプロジェクトの詳細を入力します。
lb4 app

# hostから'backend/backend' ディレクトリの内容を 'backend/' ディレクトリに移動
mv backend/backend/* backend/
mv backend/backend/.[!.]* backend/

# 空の 'backend/backend' ディレクトリを削除
rmdir backend/backend

# データベースとの接続を設定します。lb4 datasource コマンドを実行し、プロンプトに従ってデータベースの接続情報を入力します。
lb4 datasource

# モデルを作成します。lb4 model コマンドを実行し、プロンプトに従ってモデルの詳細を入力します。
lb4 model

# リポジトリを作成します。lb4 repository コマンドを実行し、プロンプトに従ってリポジトリの詳細を入力します。
lb4 repository

# コントローラを作成します。lb4 controller コマンドを実行し、プロンプトに従ってコントローラの詳細を入力します。
lb4 controller

# テストを書きます。各関数が正しく動作することを確認するためのテストコードを書きます。

# テストを実行します。yarn test コマンドを実行して、テストがすべてパスすることを確認します。
yarn test
```

### frontend

```sh
npx nuxi init bookman

✔ Which package manager would you like to use?
yarn

yarn install

yarn add vuetify@next

yarn add -D typescript

npx tsc --init
```

## 開発環境の構築

TypeScript、Vue3、Vuetifyをインストールする
開発用のデータベースをセットアップする
開発用のVercelアカウントを作成する
ユーザー認証機能の実装

Googleアカウント認証を実装する
認証されたユーザーのみがアプリにアクセスできるようにする
書籍登録機能の実装

ユーザーが書籍を登録できるようにする
登録した書籍はデータベースに保存されるようにする
書籍一覧表示機能の実装

登録した書籍を一覧表示できるようにする
書籍編集・削除機能の実装

登録した書籍を編集・削除できるようにする
書籍検索機能の実装

書籍のタイトルや著者名で検索できるようにする
デプロイ環境の構築

Vercelでアプリをデプロイする
カスタムドメインの設定やSSL証明書の取得を行う
CI/CDの導入

GitHub Actionsを使用して、自動テストや自動デプロイを行う
DockerやKubernetesの導入

Dockerを使用して、アプリケーションをコンテナ化する
Kubernetesを使用して、コンテナのデプロイやスケーリングを行う
Devcontainerの導入

Visual Studio CodeのDevcontainerを使用して、開発環境をコンテナ化する
以上が、蔵書管理アプリを開発するための段階的な手順です。必要に応じて、各ステップを詳細に学習し、実装していくことをお勧めします。

### 1 開発環境構築

開発環境の構築には、以下の手順が必要です。

TypeScript、Vue3、Vuetifyをインストールする

TypeScriptは、JavaScriptに静的型付けを追加するための言語です。Vue3とVuetifyは、Vue.jsのフレームワークとUIコンポーネントライブラリです。
ターミナルで以下のコマンドを実行して、それぞれをインストールします。
開発用のデータベースをセットアップする

開発用のデータベースとして、SQLiteを使用することができます。SQLiteは、軽量で簡単にセットアップできるため、開発用途に適しています。
ターミナルで以下のコマンドを実行して、SQLiteをインストールします。
開発用のVercelアカウントを作成する

Vercelは、サーバーレスアーキテクチャを採用したクラウドプラットフォームで、Vue.jsアプリケーションのデプロイに適しています。
Vercelのアカウントを作成するには、以下の手順を実行します。
https://vercel.com/signup にアクセスして、アカウントを作成する。
Vercel CLIをインストールする。
Vercel CLIでログインする。
以上が、開発環境の構築に必要な手順です。必要に応じて、各ステップを詳細に学習し、実装していくことをお勧めします。
