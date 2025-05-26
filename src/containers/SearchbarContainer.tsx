import React from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

interface SearchbarContainerProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSort: (sortOption: string) => void;
  minPrice: number;
  maxPrice: number;
  handleUserMinPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserMaxPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userMinPrice: number;
  userMaxPrice: number;
}

const SearchbarContainer: React.FC<SearchbarContainerProps> = ({
  searchTerm,
  handleSearch,
  handleSort,
  minPrice,
  maxPrice,
  handleUserMinPriceChange,
  handleUserMaxPriceChange,
  userMinPrice,
  userMaxPrice,
}) => {
  return (
    // Container for search bar and filters with styling and layout
    <div className="search text-left bg-violet-200 p-5 rounded-2xl mb-6 flex flex-col gap-6 items-start">
      {/* Search input component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      
      {/* Filter controls component */}
      <Filters
        handleSort={handleSort}
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleUserMinPriceChange={handleUserMinPriceChange}
        handleUserMaxPriceChange={handleUserMaxPriceChange}
        userMinPrice={userMinPrice}
        userMaxPrice={userMaxPrice}
      />
    </div>
  );
};

export default SearchbarContainer;
