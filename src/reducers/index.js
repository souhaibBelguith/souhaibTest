import repos from './repos.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  repos
})

export default rootReducer