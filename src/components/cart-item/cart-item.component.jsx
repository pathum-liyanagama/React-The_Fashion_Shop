import React from 'react';
import "./cart-item.styles.scss";

function CartItem({ item }) {

    const { name, price, quantity, imageUrl } = item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"></img>
            <div className="item-details">
                <span className="cart-item__name">{name}</span>
                <span className="cart-item__quantity">{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;