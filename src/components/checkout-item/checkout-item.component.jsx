import React from 'react';
import { connect } from 'react-redux'
import { addItem, removeItem, decreaseItemCount } from '../../redux/cart/cart.actions';

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, addItem, removeItem, decreaseItemCount }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="checkout-item">
            <img alt={name} src={imageUrl}></img>
            <span>{name}</span>
            <div>
                <span className="arrow" onClick={() => quantity > 1 && decreaseItemCount(item)}>&#10094;</span>
                <span>{quantity}</span>
                <span className="arrow" onClick={() => addItem(item)}>&#10095;</span>
            </div>
            <span>{price}</span>
            <div className="remove-button" onClick={() => removeItem(item)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = {
    addItem,
    removeItem,
    decreaseItemCount
}

export default connect(null, mapDispatchToProps)(CheckoutItem);