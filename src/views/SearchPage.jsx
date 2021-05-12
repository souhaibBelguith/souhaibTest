import { useState, useEffect } from "react";
import { useDispatch, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSearchedRepos } from '../actions/repos.actions'
import SearchElement from "../components/SearchElement";
import ElementDetails from "../components/ElementDetails";

import "./SearchPage.scss";

function mapStateToProps(state) {
  return {
    repos: state.repos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchedRepos: bindActionCreators(getSearchedRepos, dispatch)
  }
}

const SearchPage = (props) => {
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchInputFocus, setSearchInputFocus] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [fullViewElement, setFullViewElement] = useState();

  useEffect(() => {
    if (searchInputValue) {
      dispatch(getSearchedRepos(searchInputValue));
    } else {
      setSearchData([]);
    }
  }, [searchInputValue])// eslint-disable-line react-hooks/exhaustive-deps

  const performSearch = () => {
    setSearchData(props.repos);
  };

  return (
    <div className="search">
      <div
        className={`input${
          searchInputFocus || searchInputValue ? " compact" : ""
        }`}
      >
          <input
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            onFocus={() => setSearchInputFocus(true)}
            onBlur={() => setSearchInputFocus(false)}
            placeholder="Search"
          />
        <button onClick={performSearch}>Chercher</button>
      </div>
      {!!fullViewElement ?  <div className="back-button"><button onClick={() => setFullViewElement(null)}>Retour</button></div> :''}
      <div className="search-result">
        {!!fullViewElement ? (
            <SearchElement
              repoItem={fullViewElement}
              onClick={() => setFullViewElement(null)}
            />
        ) : (
          searchData.map((element) => (
            <SearchElement
              key={element.id}
              repoItem={element}
              onClick={setFullViewElement}
            />
          ))
        )}
      </div>
      <div className="repo-list">
        {fullViewElement && <ElementDetails item={fullViewElement} />}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
