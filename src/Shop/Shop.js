import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product/Product';
import './Shop.css';

const Shop = () => {

    // API Calling Function 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // Items Adding Function Send
    const clickToAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shopping-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                    clickToAddCart={clickToAddCart}
                
                    ></Product>)
                }
            </div>
            <div className="shop-summery-container">
                <h2>Order Summery</h2>
                <p>Selected Items : {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;