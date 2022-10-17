import axios from "axios";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { Pokemon } from "../models";
import { CHANGE_POKEMON, pokemonActions } from "./index";

const api = "https://pokeapi.co/api/v2/pokemon";

async function fetchThePokemon(name: string) {
  const res = await axios.get(`${api}/${name}`);
  return res.data;
}

function* changePokemon(
  action: ReturnType<typeof pokemonActions.changePokemon>
) {
  try {
    yield put(pokemonActions.changePokemonStatus(true));
    yield put(pokemonActions.changePokemonFailed(undefined));

    const pokemon: Pokemon = yield call(fetchThePokemon, action.payload.name);

    yield put(pokemonActions.changePokemonStatus(false));
    yield put(pokemonActions.changePokemonSuccess(pokemon));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(pokemonActions.changePokemonStatus(false));
      yield put(pokemonActions.changePokemonFailed(error.response?.data));
    }
  }
}

function* changePokemonSaga() {
  yield takeEvery(CHANGE_POKEMON, changePokemon);
}

export function* pokemonSagas() {
  yield fork(changePokemonSaga);
}
