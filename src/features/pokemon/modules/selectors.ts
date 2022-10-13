import { createSelector } from "reselect";
/**
 * Selectors
 */

/**
 * 現在のポケモン情報を取得する
 */
export function currentPokemonSelector(state): any {
  return state.pokemon.current;
}

/**
 * ポケモンAPIのコール状態を取得する
 */
export function changePokemonStatusSelector(state): boolean {
  return state.pokemon.isLoading;
}

/**
 * ポケモンAPIのエラー状態を取得する
 */
export function changePokemonErrorSelector(state): string | undefined {
  return state.pokemon.error;
}
