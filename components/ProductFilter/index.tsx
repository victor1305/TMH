import React from 'react';

interface ProductFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ filter, onFilterChange }) => (
  <div className='ml-5 mt-5'>
    <label htmlFor="product-filter">Filtrar productos:</label>
    <input
      className='ml-4 border border-gray-300 rounded-md p-2 w-150'
      id="product-filter"
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      placeholder="Buscar productos..."
    />
  </div>
);

export default ProductFilter;