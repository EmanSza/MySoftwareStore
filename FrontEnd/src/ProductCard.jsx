import React from 'react';
import './ProductCard.css';
const ProductCard = ({ product }) => {//product to be manipulated 
    return (
      <div className="product-card">
        
        <img src={product.imageUrl} 
         alt={product.name} 
         className="product-image" />

        <div className="product-info">
          <h5 className="product-name">{product.name}</h5>
          <p className="product-price">${product.price}</p>
          <button className="product-add-to-cart">Add to Cart</button>
        </div>

      </div>
    );
  };
  
  export default ProductCard;