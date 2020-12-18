import React from 'react';

const SearchBar = ({selected, sortBy, sortedBy}) => {


  

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sortedBy === "Alphabetically"} onChange={(e) => sortBy(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sortedBy === "Price"} onChange={(e) => sortBy(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={ (e) => selected(e.target.value) }>
        <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
