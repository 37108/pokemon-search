import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { favoriteReducer } from "./features/favorite";
import { pokemonReducer, pokemonSagas } from "./features/pokemon";

const reducer = combineReducers({
  pokemon: pokemonReducer,
  favorite: favoriteReducer,
});

function* rootSaga() {
  yield fork(pokemonSagas);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
