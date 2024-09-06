import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../searchBar/Searchbar.module.css";

// Suchleiste für SearchPage
const SearchBar = ({ onSearch, onFilterChange }) => {
  const [query, setQuery] = useState("");

  // useState für Filter, um im select Menü die aktuell ausgewählte Option anzuzeigen
  const [filter, setFilter] = useState("");

  // Suchleiste
  const handleChange = (e) => {
    setQuery(e.target.value); // speichert die aktuelle Eingabe
    onSearch(e.target.value); // aktuelle Eingabe wird weitergeleitet an SearchPage.jsx
  };

  // Filter Option
  const handleFilterChange = (e) => {
    setFilter(e.target.value); // speichert die aktuelle Filterauswahl
    onFilterChange(e.target.value); // aktuelle Filterauswahl wird weitergeleitet an SearchPage.jsx
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Suche nach Produkten..."
          value={query} // aktueller Suchbegriff
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.selectOptions}>
        <select value={filter} onChange={handleFilterChange}>
          <option value={""}>Filter</option>
          <option value={"PreisAsc"}>Preis aufsteigend</option>
          <option value={"PreisDsc"}>Preis absteigend</option>
          <option value={"static"}>statisch</option>
          <option value={"dynamic"}>dynamisch</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

SearchBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
