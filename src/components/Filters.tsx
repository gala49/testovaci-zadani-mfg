import React from 'react';

interface FiltersProps {
    handleSort: (value: string) => void;
    minPrice: number;
    maxPrice: number;
    handleUserMinPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleUserMaxPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    userMinPrice: number;
    userMaxPrice: number;
}

const Filters: React.FC<FiltersProps> = ({
    handleSort,
    minPrice,
    maxPrice,
    handleUserMinPriceChange,
    handleUserMaxPriceChange,
    userMinPrice,
    userMaxPrice,
}) => {
    return (
        <div className="filters flex flex-col gap-4 items-start w-full">
            <div className="filters-options">
                <p className="font-semibold mb-1">Filtrovat dle</p>
                <div className="sort-options flex flex-col gap-2">
                    <label htmlFor="relevance">
                        <input
                            id="relevance"
                            type="radio"
                            name="sort"
                            value="relevance"
                            defaultChecked
                            className="mr-2"
                            onChange={(e) => handleSort(e.target.value)}
                        />{' '}
                        Relevance
                    </label>
                    <label htmlFor="price-asc">
                        <input
                            id="price-asc"
                            type="radio"
                            name="sort"
                            value="price-asc"
                            className="mr-2"
                            onChange={(e) => handleSort(e.target.value)}
                        />{' '}
                        Od nejlevnějšího
                    </label>
                    <label htmlFor="price-desc">
                        <input
                            id="price-desc"
                            type="radio"
                            name="sort"
                            value="price-desc"
                            className="mr-2"
                            onChange={(e) => handleSort(e.target.value)}
                        />{' '}
                        Od nejdražšího
                    </label>
                </div>
            </div>
            <div className="filters-price flex flex-col gap-2 w-full">
                <label htmlFor="min-price">
                    <span className="font-semibold">Cena od</span>
                </label>
                <div className="w-full flex items-center justify-between">
                    <span>{minPrice} Kč</span>
                    <input
                        id="min-price"
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        step={10}
                        onChange={handleUserMinPriceChange}
                        value={userMinPrice}
                        className="mx-2"
                    />
                    <span>{maxPrice} Kč</span>
                </div>
                <span className="font-semibold w-full text-center">({userMinPrice} Kč)</span>
                <label htmlFor="max-price">
                    <span className="font-semibold">Cena do</span>
                </label>
                <div className="w-full flex items-center justify-between">
                    <span>{minPrice} Kč</span>
                    <input
                        id="max-price"
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        step={10}
                        onChange={handleUserMaxPriceChange}
                        value={userMaxPrice}
                        className="mx-2"
                    />
                    <span>{maxPrice} Kč</span>
                </div>
                <span className="font-semibold w-full text-center">({userMaxPrice} Kč)</span>
            </div>
        </div>
    );
};

export default Filters;
