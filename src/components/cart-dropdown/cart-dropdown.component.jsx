import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">

            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map((item) => <CartItem key={item.id} item={item} />)
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 'cartItems': selectCartItems(state) };
}

export default connect(mapStateToProps)(CartDropdown);