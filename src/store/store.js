import { applyMiddleware,compose, createStore } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;