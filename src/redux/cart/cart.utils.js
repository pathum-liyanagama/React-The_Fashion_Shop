export const addItemToCart = (cart, itemToAdd) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);
    console.log("item found");
    if (existingItem) {
        return cart.map(cartItem => cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    else {
        return [...cart, { ...itemToAdd, quantity: 1 }]
    }
}

export const decreaseItemCount = (cart, itemToDecrease) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemToDecrease.id);

    if (existingItem && existingItem.quantity > 1) {
        return cart.map(cartItem => cartItem.id === itemToDecrease.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }
    else {
        return cart
    }
}