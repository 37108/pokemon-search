import axios from "axios";
import { takeEvery, fork, call, put } from "redux-saga/effects";
import { CHANGE_POKEMON, pokemonActions } from "./index";

const api = "https://pokeapi.co/api/v2/pokemon";

async function fetchThePokemon(name) {
  const res = await axios.get(`${api}/${name}`);
  return res.data;
}

function* changePokemon(action) {
  try {
    yield put(pokemonActions.changePokemonStatus(true));
    yield put(pokemonActions.changePokemonFailed(undefined));

    const pokemon = yield call(fetchThePokemon, action.payload.name);

    yield put(pokemonActions.changePokemonStatus(false));
    yield put(pokemonActions.changePokemonSuccess(pokemon));
  } catch (error) {
    yield put(pokemonActions.changePokemonStatus(false));
    yield put(pokemonActions.changePokemonFailed(error.response.data));
  }
}

function* changePokemonSaga() {
  yield takeEvery(CHANGE_POKEMON, changePokemon);
}

export default function* pokemonSagas() {
  yield fork(changePokemonSaga);
}
