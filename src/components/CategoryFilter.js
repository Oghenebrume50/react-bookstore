import React from 'react';
import categories from '../utils/categories';

const CategoryFilter = (props) => {
  const FilterCategories = ['All', ...categories];
  return(
    <div className='header'>
      <div>BookStore CMS</div>
      <div>
        <p>Categories</p>
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