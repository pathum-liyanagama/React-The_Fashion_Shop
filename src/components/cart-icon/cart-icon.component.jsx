import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { toggleShowCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ({ toggleShowCartDropdown, cartItemsCount }) => (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsCount}</span>
    </div>
)

const mapStateToProps = (state) => (
    { 'cartItemsCount': selectCartItemsCount(state) }
)

const mapDispatchToProps = {
    toggleShowCartDropdown
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);