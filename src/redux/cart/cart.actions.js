import CartActionTypes from './cart.actiontypes';

export const toggleShowCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseItemCount = (item) => ({
    type: CartActionTypes.DECREASE_ITEM,
    payload: item
})