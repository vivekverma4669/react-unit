// NOTE: use this store variable to create a store.

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as AppReducer } from './AppReducer/reducer';
import { reducer as AuthReducer } from './AuthReducer/reducer';

const rootReducer = combineReducers({
  app: AppReducer,
  auth: AuthReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}