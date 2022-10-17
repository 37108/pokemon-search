import { RootState } from "../../../store";
/**
 * Selectors
 */

/**
 * 現在のポケモン情報を取得する
 */
export function currentPokemonSelector(
  state: RootState
): RootState["pokemon"]["current"] {
  return state.pokemon.current;
}

/**
 * ポケモンAPIのコール状態を取得する
 */
export function changePokemonStatusSelector(state: RootState): boolean {
  return state.pokemon.isLoading;
}

/**
 * ポケモンAPIのエラー状態を取得する
 */
export function changePokemonErrorSelector(
  state: RootState
): string | undefined {
  return state.pokemon.error;
}
