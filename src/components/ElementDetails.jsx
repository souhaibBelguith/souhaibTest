const ElementDetails = ({ item }) => {
  return (
    <div>
        {item.description? <div><h2>Description</h2>
        <p>{item.description}</p></div> :''}
        {item.language? <div><h3>Language</h3>
        <p>{item.language}</p></div> :''}
        {item.html_url? <div><h3>Lien</h3>
        <p>{item.html_url}</p></div> :''}
    </div>
  );
};

export default ElementDetails;
