import CartActionTypes from './cart.actiontypes';

export const toggleShowCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})