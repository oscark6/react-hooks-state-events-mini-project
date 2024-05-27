import React from 'react'

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onSelectCategory(category)} >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;