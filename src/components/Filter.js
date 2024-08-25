import React from "react";

function Filter({ search, onSearchChange, category, onCategoryChange }) {
  // Dummy data for demonstration purposes
  const items = [
    { name: "Lettuce", category: "Produce" },
    { name: "Swiss Cheese", category: "Dairy" },
    { name: "String Cheese", category: "Dairy" },
    { name: "Cookies", category: "Dessert" },
  ];

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        name="category"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
