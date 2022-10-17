## Getting Started
`react-scripts-ts` is for StackBlitz

```bash
$ yarn
$ yarn dev
```

## 実装予定の機能
- [ ] features での依存を公開範囲に留める
  - [ ] [ESLint のルール](https://github.com/alan2207/bulletproof-react/blob/master/.eslintrc.js#L39-L44)を追加する
  - [ ] ESLint, Prettier, TSC を中心にコードのクリーンアップをする
- [ ] React Router を追加する
- [ ] Material UI から Tailwind を利用した自前のUIに切り替えていく / `src/components` に共通コンポーネントを作成する


- [ ] ポケモンの検索画面を作る
  - [x] ポケモンのなまえを表示する
  - [x] ポケモンのID, Weight, Heightを表示する
  - [ ] ポケモンのタイプを表示する
  - [ ] ポケモンのとくせいを表示する
- [x] 検索したポケモンをお気に入りに登録する
- [ ] 検索したポケモンを押下することで詳細画面へ遷移する
- [ ] お気に入りに登録したポケモンの一覧を表示する
- [ ] お気に入りを属性でフィルターする
- [ ] お気に入り登録したポケモンをクリックした時に詳細画面へ遷移する
  - [ ] お気に入りにデータがない場合はfetchする
- [ ] とくせい を押下すると詳細情報が取得できる