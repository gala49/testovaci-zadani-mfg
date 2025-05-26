import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch }) => {
  return (
    <div className="flex flex-col gap-2 font-semibold">
      <label htmlFor="search">Hledat produkty</label>
      <input
        id="search"
        type="text"
        placeholder="Hledat..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input bg-white rounded-lg py-2 px-4 font-normal"
      />
    </div>
  );
};

export default SearchBar;
