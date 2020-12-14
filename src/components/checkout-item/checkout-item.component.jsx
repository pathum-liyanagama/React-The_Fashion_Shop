import React from 'react';
import "./checkout-item.styles.scss";


const CheckoutItem = ({ item }) => {
    const { imageUrl, name, price, quantity } = item;
    console.log(imageUrl);
    return (
        <div className="checkout-item">
            <img alt={name} src={imageUrl}></img>
            <span>{name}</span>
            <div>
                <span>{quantity}</span>
            </div>
            <span>{price}</span>
            <div className="remove-button">&#10006;</div>
        </div>
    )
}

export default CheckoutItem;