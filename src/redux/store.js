import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'
import rootSaga from './sagas';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (typeof window.devToolsExtension === 'function') {
  enhancers.push(window.devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);
console.log({ store })
// store.runSaga = sagaMiddleware.runSaga;
sagaMiddleware.run(rootSaga);
export default store;