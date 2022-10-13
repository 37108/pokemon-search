/**
 * Selectors
 */

/**
 * お気に入り登録したポケモン情報を取得する
 */
export function favoritePokemonSelector(state) {
  return state.favorite.items;
}

/**
 * お気に入り登録したポケモンのタイプ一覧を取得する
 */
export function favoritePokemonTypesSelector(state) {
  const favorite = state.favorite.items;
  if (!favorite) {
    return [];
  }
  const types = favorite.reduce((prev, cur) => {
    return [...prev, ...cur.types.map((item) => item.type.name)];
  }, []);

  return Array.from(new Set(types));
}

/**
 * フィルター情報を取得する
 */
export function favoritePokemonTypeFilterSelector(state) {
  return state.favorite.filterType;
}

/**
 * お気に入り登録したポケモンのタイプでフィルターした情報を返す
 */
export function favoriteFilteredPokemonSelector(state) {
  const type: string | undefined = state.favorite.filterType;
  if (!type) {
    return [];
  }
  const favorite = state.favorite.items;

  if (type === 'all') {
    return favorite;
  }

  return favorite.filter((item) =>
    item.types.some((x) => x.type.name === type)
  );
}
