import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import { toggleShowCartDropdown } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ({ toggleShowCartDropdown }) => (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = {
    toggleShowCartDropdown
}

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);