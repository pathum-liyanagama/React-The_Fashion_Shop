export const addItemToCart = (cart, itemToAdd) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingItem) {
        existingItem.quantity++
        return cart
    }
    else {
        return [...cart, { ...itemToAdd, quantity: 1 }]
    }
}