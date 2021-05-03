import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';


import createSagaMiddleware from 'redux-saga';
import {watchAgeup, watchAgedown, changeDogimage} from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeup);
sagaMiddleware.run(watchAgedown);
sagaMiddleware.run(changeDogimage);

export {store};