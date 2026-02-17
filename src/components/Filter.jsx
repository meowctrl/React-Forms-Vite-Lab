import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [searchTerm, setSearchTerm] = useState(search || "");

  return (
    <div className="Filter">
      <input type="text" name="search" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); onSearchChange(e); }} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;