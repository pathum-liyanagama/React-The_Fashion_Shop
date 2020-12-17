import React from 'react';
import { connect } from 'react-redux'
import { removeItem } from '../../redux/cart/cart.actions';

import "./checkout-item.styles.scss";



const CheckoutItem = ({ item, removeItem }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="checkout-item">
            <img alt={name} src={imageUrl}></img>
            <span>{name}</span>
            <div>
                <span>{quantity}</span>
            </div>
            <span>{price}</span>
            <div className="remove-button" onClick={() => removeItem(item)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = {
    removeItem
}

export default connect(null, mapDispatchToProps)(CheckoutItem);