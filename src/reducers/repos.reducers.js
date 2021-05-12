import { FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE } from '../actions/repos.actions'

let initialState = []

const repoActions = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_REPOS_SUCCESS:
      return [...action.payload]
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state
  }
}

export default repoActions;