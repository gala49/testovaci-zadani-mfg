import React, { useState, useEffect } from 'react';
import { useProducts } from "../hooks/useProducts";
import ProductsContainer from '../containers/ProductsContainer';
import SearchbarContainer from '../containers/SearchbarContainer';

const Homepage = () => {
    const { products, loading, error } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('relevance');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [userMinPrice, setUserMinPrice] = useState(0);
    const [userMaxPrice, setUserMaxPrice] = useState(0);

    // Handle search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Handle sorting options
    const handleSort = (sortOption) => {
        setSortBy(sortOption);
    }

    // Handle min price range changes
    const handleMinPriceChange = (event) => {
        const value = parseInt(event, 10);
        
        if(isNaN(value)) {
            setMinPrice(0);
            return;
        }
        setMinPrice(Math.floor(value / 10 ) * 10);
    }
    
    // Handle max price range changes
    const handleMaxPriceChange = (event) => {
        const value = parseInt(event, 10);
        
        if(isNaN(value)) {
            setMaxPrice(0);
            return;
        }
        setMaxPrice(Math.ceil(value / 10 ) * 10);
    }
    
    // Handle user input for min price
    const handleUserMinPriceChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value)) {
            setUserMinPrice(0);
            return;
        }
        setUserMinPrice(value);
    }

    // Handle user input for max price
    const handleUserMaxPriceChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value)) {
            setUserMaxPrice(0);
            return;
        }
        setUserMaxPrice(value);
    }

    // Reset user min and max price when min or max price changes
    useEffect(() => {
        setUserMinPrice(minPrice);
        setUserMaxPrice(maxPrice);
    }, [minPrice, maxPrice]);

    return (
        <>
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
                <SearchbarContainer 
                    searchTerm={searchTerm} 
                    handleSearch={handleSearch} 
                    handleSort={handleSort} 
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    handleUserMinPriceChange={handleUserMinPriceChange}
                    handleUserMaxPriceChange={handleUserMaxPriceChange}
                    userMinPrice={userMinPrice}
                    userMaxPrice={userMaxPrice}
                />
            </div>
            <div className='flex-3'>
                <h2 className="text-3xl font-bold mb-4">Produkty</h2>

                {/* Products grid rendering items depending on searchTerm */}
                {loading ? (
                    <div className="loading">Načítání produktů...</div>
                ) : error ? (
                    <div className="error">Při načítání produktů nastala chyba</div>
                ) : (
                    <ProductsContainer 
                        products={products} 
                        searchTerm={searchTerm} 
                        sortBy={sortBy} 
                        handleMinPriceChange={handleMinPriceChange} 
                        handleMaxPriceChange={handleMaxPriceChange}
                        userMinPrice={userMinPrice}
                        userMaxPrice={userMaxPrice}
                    />
                )}
            </div>

        </div>

        </>
    );
};

export default Homepage;