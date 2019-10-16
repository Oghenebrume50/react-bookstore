import React from 'react';
import categories from '../utils/categories';

const CategoryFilter = () => {
  const FilterCategories = ['All', ...categories];
  return(
    <div>
      <p>Filter</p>
      <div>
        <select 
        name='category'
        >
          {FilterCategories.map((category, idx) => 
            <option key={idx}>{category}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;