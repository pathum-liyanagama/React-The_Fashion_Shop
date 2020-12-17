import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleShowCartDropdown } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map((item) => <CartItem key={item.id} item={item} />)
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button onClick={() => {
                history.push("/checkout");
                dispatch(toggleShowCartDropdown());
            }}
            >GO TO CHECKOUT
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 'cartItems': selectCartItems(state) };
}

export default withRouter(connect(mapStateToProps)(CartDropdown));