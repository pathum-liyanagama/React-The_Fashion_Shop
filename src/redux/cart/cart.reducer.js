import CartActionTypes from './cart.actiontypes';
import { addItemToCart, decreaseItemCount } from './cart.utils';

const INITIAL_STATE = {
    showCartDropdown: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN:
            return {
                ...state,
                showCartDropdown: !state.showCartDropdown
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            }

        case CartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemCount(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;