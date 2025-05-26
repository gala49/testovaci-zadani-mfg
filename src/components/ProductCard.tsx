import React from 'react';

interface Product {
  image: string;
  title: string;
  price: number;
  content: string;
  url: string;
  ean: number;
  relevance: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="product-card rounded-2xl overflow-hidden bg-white shadow-md flex flex-col h-full">
      <img src={product.image} alt={product.title} className="product-image p-2" />
      <div className="px-6 py-4 flex flex-col justify-between h-full">
        <div className='product-info grid grid-cols-6 gap-4 text-left pb-4'>
          <h3 className="font-semibold col-span-4 text-base/5">{product.title}</h3>
          <p className="col-span-2 text-right self-center font-bold text-red-500 text-xl">{product.price} Kč</p>
          <p className="col-span-6 text-sm">{product.content}</p>
        </div>
        <a 
          className="btn-primary bg-violet-500 text-white text-sm font-semibold text-center px-4 py-2 mt-auto rounded-lg col-span-4 hover:bg-violet-600 transition-colors" 
          href={product.url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Zjistit více
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
