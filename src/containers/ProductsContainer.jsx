import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const ProductsContainer = ({ products, searchTerm, sortBy, handleMinPriceChange, handleMaxPriceChange, userMinPrice, userMaxPrice }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Filter products based on searchTerm
    const filteredProducts = useMemo(() => {
        // If searchTerm is empty, return all products
        if (searchTerm === '') return products;

        // Filter products that include the searchTerm in their title
        return products.filter(product => (
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }, [products, searchTerm]);

    // Filter products based on price range
    const priceFilteredProducts = useMemo(() => {
        // If userMinPrice or userMaxPrice is not set, return filteredProducts
        if (userMinPrice === 0 && userMaxPrice === 0) return filteredProducts;

        // Filter products that fall within the user-defined price range
        return filteredProducts.filter(product => (
            product.price >= userMinPrice && product.price <= userMaxPrice
        ));
    }, [filteredProducts, userMinPrice, userMaxPrice]);

    // Sort products based on sortBy
    const sortedProducts = useMemo(() => {
        // Default sorting by relevance
        if (sortBy === 'relevance') {
            return priceFilteredProducts;
        }

        // Sort products by price
        return [...priceFilteredProducts].sort((a, b) => {
            if (sortBy === 'price-asc') {
                return a.price - b.price;
            } else if (sortBy === 'price-desc') {
                return b.price - a.price;
            } 
            return 0; // Default case
        });
    }, [priceFilteredProducts, sortBy]);

    // Calculate last index of pagination
    const totalPages = Math.ceil(priceFilteredProducts.length / itemsPerPage);

    // Filter products for the current page
    const currentProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedProducts.slice(startIndex, endIndex);
    }, [sortedProducts, currentPage]);

    useEffect(() => {
        // Find and save min and max prices from filtered products
        const prices = filteredProducts.map(product => product.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        handleMinPriceChange(minPrice);
        handleMaxPriceChange(maxPrice);
    }, [filteredProducts]);

    // Return nothing found if no products match the filter
    if (priceFilteredProducts.length === 0) {
        return <div className="nothing-found text-center text-gray-500">Žádné produkty nenalezeny. Zkuste upravit filtr hledání.</div>;
    }
    

    return (
        <>
            {/* Product grid */}
            <div className="products-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {currentProducts.map((product) => (
                    <ProductCard key={product.title} product={product} />
                ))}
            </div>

            {/* Pagination controls if there's more than 12 products */}
            { totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    searchTerm={searchTerm}
                />
            )}
        </>
    );
}

export default ProductsContainer;