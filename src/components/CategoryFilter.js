import React from 'react';
import categories from '../utils/categories';

const CategoryFilter = (props) => {
  const FilterCategories = ['All', ...categories];
  return(
    <div>
      <p>Filter</p>
      <div>
        <select
        name='category'
        onChange={props.changeFilter}
        >
          {FilterCategories.map((category, idx) => 
            <option key={idx} value={category}>{category}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;