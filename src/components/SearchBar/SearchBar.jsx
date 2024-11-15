import { useContext } from "react";
import { AppContext } from "../../App";

import "./SearchBar.css"

const SearchBar = () => {
  const { email, name, setEmail, setName } = useContext(AppContext);

  return (
    <div className="search_bar">
      <label htmlFor="nameQuery">
        Name: 
        <input
          id="nameQuery"
          name="nameQuery"
          placeholder="Search for a name..."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label htmlFor="emailQuery">
        Email: 
        <input
          id="emailQuery"
          name="emailQuery"
          value={email}
          placeholder="Search for a email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default SearchBar;
