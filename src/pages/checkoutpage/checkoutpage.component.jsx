import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkoutpage.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <span>Product</span>
            <span>Description</span>
            <span>Unit Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span>Remove</span>
        </div>

        {cartItems.map((item) => (<CheckoutItem key={item.id} item={item} />))}

        < div className="total">Total ${total}</div>
    </div >
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);