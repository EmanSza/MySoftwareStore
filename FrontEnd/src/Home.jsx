import React,{useState} from "react";
import './Home.css'; // Specific CSS
import logo from './mysoftwarestorewebp.png'
import ProductCard from './ProductCard';

const Home = ({products}) => {

    //MOCK PRODUCTS< WILL REMOVE WHEN DATABASE IS AVAIBLE
    const mockProducts = [
        { id: 1, name: 'Ryzen memory', price: 100, imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Apple monitor', price: 200, imageUrl: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'keyboard', price: 100, imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Mouse', price: 200, imageUrl: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, name: 'Computer speakers', price: 100, imageUrl: 'https://media.istockphoto.com/id/494062468/photo/speaker-at-recording-studio.jpg?s=1024x1024&w=is&k=20&c=7tgzaZ-zGMPaZEzHu7dU7sCI7F5Ns57RdY-r4Ks3QLM=' },
        { id: 6, name: 'Projector', price: 200, imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 7, name: 'Internet router', price: 100, imageUrl: 'https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 8, name: 'Laptop bag', price: 200, imageUrl: 'https://media.istockphoto.com/id/1374876306/photo/packing-for-a-business-trip.jpg?s=1024x1024&w=is&k=20&c=QLcegCjA670DJ6tNTYGfXXKGF7KMFc3-9k_NG94terE=' },
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