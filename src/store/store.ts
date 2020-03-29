import { apiMiddleware } from './../utils/actionMiddleware';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { main } from '../pages/main/main.reducer';
const reducer = combineReducers({
  main,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiMiddleware)),
);
