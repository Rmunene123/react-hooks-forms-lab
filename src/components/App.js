import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleSearchChange(searchTerm) {
    setSearch(searchTerm);
  }

  function handleCategoryChange(category) {
    setCategory(category);
  }

  const filteredItems = items.filter(item =>
    (category === "All" || item.category === category) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
