import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuidv4(), // Generate a unique ID
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the parent component
    onItemFormSubmit(newItem);

    // Clear the form fields
    setItemName('');
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={itemName} // Controlled input
        onChange={(e) => setItemName(e.target.value)} // Update state on change
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={itemCategory} // Controlled select
        onChange={(e) => setItemCategory(e.target.value)} // Update state on change
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Dessert">Dessert</option>
        <option value="Frozen">Frozen</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks">Snacks</option>
        <option value="Canned Goods">Canned Goods</option>
        <option value="Grains">Grains</option>
        <option value="Condiments">Condiments</option>
        <option value="Spices">Spices</option>
        <option value="Household">Household</option>
        <option value="Personal Care">Personal Care</option>
    
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
