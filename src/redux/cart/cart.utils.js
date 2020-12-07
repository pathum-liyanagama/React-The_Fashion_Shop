export const addItemToCart = (cart, itemToAdd) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingItem) {
        existingItem.quantity++;
        //remove existing item from cart
        cart = cart.filter(item => item.id !== existingItem.id)
        //add again to simulate a object change. Otherwise instant quantity change not visible
        return [...cart, existingItem]
    }
    else {
        return [...cart, { ...itemToAdd, quantity: 1 }]
    }
}