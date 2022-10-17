import { Pokemon } from "../../pokemon";

export * from "./selectors";

/**
 * Actions
 */

/**
 * 現在のポケモンをお気に入りに登録する
 */
export const ADD_FAVORITE = "ADD_FAVORITE";

/**
 * 選択したポケモンをお気に入りから削除する
 */
export const DELETE_FAVORITE = "DELETE_FAVORITE";

/**
 * フィルターする種別を選択する
 */
export const FILTER_TYPE = "FILTER_TYPE";

/**
 * Action Creators
 */
function addFavorite(payload: any) {
  return {
    type: ADD_FAVORITE,
    payload,
  };
}
function deleteFavorite(id: string) {
  return {
    type: DELETE_FAVORITE,
    payload: {
      id,
    },
  };
}
function filterType(type: string) {
  return {
    type: FILTER_TYPE,
    payload: {
      type,
    },
  };
}

export const favoriteActions = {
  addFavorite,
  deleteFavorite,
  filterType,
};

/**
 * Reducer
 */
export default function reducer(
  state: {
    items: Pokemon[];
    filterType: string | undefined;
  } = {
    items: [],
    filterType: undefined,
  },
  action: ReturnType<typeof addFavorite> | ReturnType<typeof deleteFavorite>
): {
  items: Pokemon[];
  filterType: string | undefined;
} {
  switch (action.type) {
    case ADD_FAVORITE:
      if (
        state.items.some((pokemon) => {
          return pokemon.id === action.payload.id;
        })
      ) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload.type,
      };
    default:
      return state;
  }
}
