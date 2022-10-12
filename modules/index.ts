import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import pokemonReducer from './pokemon';
import favoriteReducer from './favorite';
import pokemonSagas from './pokemon/sagas';

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
