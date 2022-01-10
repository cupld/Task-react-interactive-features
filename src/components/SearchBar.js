
// Styling
// import products from "../products"


const SearchBar = ({setQuery}) => {
  
  return (
    <input className="searchBar"
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
