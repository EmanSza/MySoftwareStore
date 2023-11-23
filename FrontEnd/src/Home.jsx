import React,{useState} from "react";
import './Home.css'; // Specific CSS
import logo from './mysoftwarestorewebp.png'
import ProductCard from './ProductCard';

const Home = ({products}) => {

    //MOCK PRODUCTS< WILL REMOVE WHEN DATABASE IS AVAIBLE
    const mockProducts = [
        { id: 1, name: 'Product 1', price: 100, imageUrl: '' },
        { id: 2, name: 'Product 2', price: 200, imageUrl: './mysoftwarestorewebp.png' },
        { id: 3, name: 'Product 3', price: 100, imageUrl: './mysoftwarestorewebp.png' },
        { id: 4, name: 'Product 4', price: 200, imageUrl: './mysoftwarestorewebp.png' },
        { id: 5, name: 'Product 5', price: 100, imageUrl: './mysoftwarestorewebp.png' },
        { id: 6, name: 'Product 6', price: 200, imageUrl: './mysoftwarestorewebp.png' },
        { id: 7, name: 'Product 7', price: 100, imageUrl: './mysoftwarestorewebp.png' },
        { id: 8, name: 'Product 8', price: 200, imageUrl: './mysoftwarestorewebp.png' },
      ];

    return (
        <div className="home">
            <img src={logo}alt="Software Store Logo" style={{ float: 'left', marginRight: '20px' }} />
            <h1>Welcome to mySoftwareStore </h1>
            <div className="products-container">
                {mockProducts.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        
    );
};

export default Home;