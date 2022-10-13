import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import favoriteReducer from "./features/favorite/modules";
import pokemonReducer from "./features/pokemon/modules";
import pokemonSagas from "./features/pokemon/modules/sagas";

const reducers = combineReducers({
  pokemon: pokemonReducer,
  favorite: favoriteReducer,
});

function* rootSaga() {
  yield fork(pokemonSagas);
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
