import React,{useState} from "react";
import './Home.css'; // Specific CSS
import logo from './mysoftwarestorewebp.png'
import ProductCard from './ProductCard';

const Home = ({products}) => {

    //MOCK PRODUCTS< WILL REMOVE WHEN DATABASE IS AVAIBLE
    const mockProducts = [
        { id: 1, name: 'teddy toy', price: 100, imageUrl: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Kitchen items', price: 200, imageUrl: 'https://media.istockphoto.com/id/1453229786/photo/organised-pantry-items-non-perishable-food-staples-healthy-eatings-fruits-vegetables-and.jpg?s=1024x1024&w=is&k=20&c=ns-PrRx778ONqpGpx9h02Ognrh_NTfUuKBXCfNQG0X0=' },
        { id: 3, name: 'Clothes', price: 100, imageUrl: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Furniture', price: 200, imageUrl: 'https://media.istockphoto.com/id/1413745510/photo/minimal-modern-home-design-with-warm-furniture-colors-poster-frame-mockup-on-bright-interior.jpg?s=1024x1024&w=is&k=20&c=fj4f5JnWGY9DsO6AyrNmRgYi9kNw06Dquomg-7iNvoc=' },
        { id: 5, name: 'Washroom products', price: 100, imageUrl: 'https://media.istockphoto.com/id/1434126129/photo/modern-bathroom-with-washing-machine-dryer-white-cabinets-and-drying-rack.jpg?s=1024x1024&w=is&k=20&c=yxGaW0ykBvIbpnjj83XIfx7PincHEf2WwJ4GgtuPXyM=' },
        { id: 6, name: 'Gift cards', price: 200, imageUrl: 'https://images.unsplash.com/photo-1582582542002-504761a4c8e6?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 7, name: 'Speakers', price: 100, imageUrl: 'https://images.unsplash.com/photo-1612241143917-d05c85c43751?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 8, name: 'School bag', price: 200, imageUrl: 'https://media.istockphoto.com/id/1374876306/photo/packing-for-a-business-trip.jpg?s=1024x1024&w=is&k=20&c=QLcegCjA670DJ6tNTYGfXXKGF7KMFc3-9k_NG94terE=' },
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