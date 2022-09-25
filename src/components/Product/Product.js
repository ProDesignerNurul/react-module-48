import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product)

    // Items Adding Function Reaceived 
    const {clickToAddCart} = props;

    const {name, price, ratings, img, seller} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="Images Loading, Please Wait A Moment" />
            <div className='product-info'>
            <p className='product-name'>Name : {name}</p>
            <p>Price : {price}</p>
            <p><small>Seller {seller}</small></p>
            <p>Ratings : {ratings} Stars</p>
            </div>
            <button onClick={() => clickToAddCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;