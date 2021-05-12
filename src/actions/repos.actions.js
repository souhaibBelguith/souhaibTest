export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE"; 

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchOneRepoSuccess = repos => (
  {
    type: FETCH_REPOS_SUCCESS,
    payload: repos
  });

export const fetchOneRepoFailure = error => ({
type: FETCH_REPOS_FAILURE,
payload: { error }
});

export const getSearchedRepos = (User) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${User}/repos`)
      .then(handleErrors)
      .then(res => res.json())
      .then(repos => {
        dispatch(fetchOneRepoSuccess(repos))
      })
      .catch(error =>
        dispatch(fetchOneRepoFailure(error))
      );
  }
}