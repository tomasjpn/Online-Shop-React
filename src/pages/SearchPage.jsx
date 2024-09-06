import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundManager from "../components/BackgroundManager.js";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchBar/SearchBar.jsx";
import data from "../data/products.json";
import styles from "../styles/SearchPage.module.css";

// SearchPage -> Seite, die es ermöglicht, nach Produktnamen zu filtern
const SearchPage = () => {
  // useState, um die ausgefilterte Datenbank darzustellen
  const [filteredProducts, setFilteredProducts] = useState(data);

  //useState, um mithilfe der Filter-Optionen, die Datenbankeinträge zu filtern
  const [filter, setFilter] = useState("");

  //Funktion, die bei der Eingabe im Inputfeld aufgerufen wird, query = Suchwort
  const handleSearch = (query) => {
    // Filtert die Produkte anhand des Suchwortes = query und der Filteroption = filter
    filterAndSetProducts(query, filter);
  };

  // Wird aufgerufen, wenn die Filteroption verwendet wird
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter); // Filteroption wird gesetzt

    filterAndSetProducts("", selectedFilter); // nur nach der Option filtern
  };

  // Hilfsfunktione: konvertiert den Preis String in eine int Zahl
  const parsePrice = (priceString) => {
    // Extrahiert die erste Zahl aus dem Preisstring
    const priceNumbers = priceString.match(/\d+(\.\d+)?/g);

    // Wenn keine Preiszahlen vorhanden sind, return
    if (!priceNumbers || priceNumbers.length === 0) return 0;

    // Nimmt immer nur die erste Zahl, egal ob es eine Spanne ist oder nicht
    return parseFloat(priceNumbers[0]);
  };

  // Haupt-Filter-Funktion:  Nimmt das Query und Filter
  const filterAndSetProducts = (query, filter) => {
    let filtered = data; // filtered = Datenbank json

    // Wenn ein Suchwort eingegeben wurde
    if (query) {
      // Filtert nach den eingegebene Wort
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter nach Filteroption
    if (filter === "PreisAsc") {
      filtered = filtered.sort(
        // Preisaufsteigend a = niedrigster -> nach b = höchster
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    } else if (filter === "PreisDsc") {
      filtered = filtered.sort(
        // Preisabsteigend b = höchster -> nach a = niedrigster
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );
    } else if (filter === "static") {
      // Alle Produkte die typeWork = static enthalten
      filtered = filtered.filter((product) => product.typeWork === "static");
    } else if (filter === "dynamic") {
      // Alle Produkte die typeWork = dynamic enthalten
      filtered = filtered.filter((product) => product.typeWork === "dynamic");
    }

    // gefilterte Dantenbank wird in filteredProducts useState gesetzt
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.mainContainer}>
      <BackgroundManager />
      <Navbar />
      <h1>SearchPage</h1>
      <div className={styles.searchBarContainer}>
        <SearchBar
          data={data}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
      </div>

      {filteredProducts.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className={styles.containerItem}
        >
          <img
            src={product.media[0]?.path}
            alt={product.name}
            className={styles.productImage}
          />
          <div className={styles.nameHeader}>
            <h3>{product.name}</h3>
          </div>

          <div className={styles.infoText}>
            <p>{product.description}</p>
          </div>

          <div className={styles.priceTag}>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
