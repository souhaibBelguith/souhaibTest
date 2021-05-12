import "./SearchElement.scss";

const SearchElement = ({ repoItem, onClick }) => {
  return (
    <div className="search-element" onClick={() => onClick(repoItem)}>
      <div className="card">
        <div className="row">
          <div className="left">{repoItem.name}</div>
          <div className="right">{repoItem.full_name}</div>
        </div>
        <div className="row">
          <div className="left">
            <div className="watchers-holder">
              <div className="icon">
                <img src={repoItem.owner.avatar_url} alt={repoItem.full_name} />
              </div>
              <div className="watchers text-bottom">
                <span>{repoItem.watchers_count} watchers</span>
              </div>
            </div>
          </div>
          <div className="right text-bottom">
            <span>{repoItem.language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchElement;
