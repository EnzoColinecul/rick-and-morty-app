import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { charactersReducer } from '../reducers/charactersReducer';
import { pagesReducer } from '../reducers/pagesReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  characters: charactersReducer,
  pages: pagesReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)