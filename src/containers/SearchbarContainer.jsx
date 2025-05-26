import React from 'react';
import SearchBar from '../components/Searchbar.jsx';
import Filters from '../components/Filters.jsx';

const SearchbarContainer = ({ searchTerm, handleSearch, handleSort, minPrice, maxPrice, handleUserMinPriceChange, handleUserMaxPriceChange, userMinPrice, userMaxPrice }) => {

    return (
        <div className="search text-left bg-violet-200 p-5 rounded-2xl mb-6 flex flex-col gap-6 items-start">
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch}/>
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