import { Pokemon } from "../models";

export * from "./selectors";

/**
 * Actions
 */

/**
 * ユーザからポケモン名を受け取って状態を変更する
 */
export const CHANGE_POKEMON = "CHANGE_POKEMON";

/**
 * CHANGE_POKEMON の実行状態を変更する
 */
export const CHANGE_POKEMON_STATUS = "CHANGE_POKEMON_STATUS";

/**
 * Saga: API取得処理が正常終了した場合に状態を更新する
 */
export const CHANGE_POKEMON_SUCCESS = "CHANGE_POKEMON_SUCCESS";

/**
 * Saga: API取得処理が異常終了した場合に処理を行う
 */
export const CHANGE_POKEMON_FAILED = "CHANGE_POKEMON_FAILED";

/**
 * Action Creators
 */
function changePokemon(name: string) {
  return {
    type: CHANGE_POKEMON,
    payload: {
      name,
    },
  };
}
function changePokemonSuccess(payload: any) {
  return {
    type: CHANGE_POKEMON_SUCCESS,
    payload,
  };
}
function changePokemonFailed(error: string | undefined) {
  return {
    type: CHANGE_POKEMON_FAILED,
    payload: {
      error,
    },
  };
}
function changePokemonStatus(loading: boolean) {
  return {
    type: CHANGE_POKEMON_STATUS,
    payload: {
      loading,
    },
  };
}

export const pokemonActions = {
  changePokemon,
  changePokemonSuccess,
  changePokemonFailed,
  changePokemonStatus,
};

/**
 * Reducer
 */
export default function reducer(
  state: {
    current: Pokemon | undefined;
    isLoading: boolean;
    error: string | undefined;
  } = {
    current: undefined,
    isLoading: false,
    error: undefined,
  },
  action:
    | ReturnType<typeof changePokemon>
    | ReturnType<typeof changePokemonSuccess>
    | ReturnType<typeof changePokemonFailed>
    | ReturnType<typeof changePokemonStatus>
): {
  current: Pokemon | undefined;
  isLoading: boolean;
  error: string | undefined;
} {
  switch (action.type) {
    case CHANGE_POKEMON_SUCCESS:
      return {
        ...state,
        current: action.payload,
      };
    case CHANGE_POKEMON_FAILED:
      return {
        ...state,
        current: undefined,
        error: action.payload.error,
      };
    case CHANGE_POKEMON_STATUS:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    default:
      return state;
  }
}
