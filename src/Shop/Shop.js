import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {addToDb, getStoreCart} from '../utilities/fakedb';
import Cart from '../components/Cart/Cart';
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


    useEffect( () => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for(const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                console.log(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products])

    // Items Adding Function Send
    const clickToAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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
            <div className="order-summery-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;