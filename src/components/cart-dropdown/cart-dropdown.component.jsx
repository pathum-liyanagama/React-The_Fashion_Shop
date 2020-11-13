import React from 'react';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';


class CartDropdown extends React.Component {

    render(){
        return (
            <div className="cart-dropdown">
                <Button>GO TO CHECKOUT</Button>
            </div>
        )
    }
}

export default CartDropdown;