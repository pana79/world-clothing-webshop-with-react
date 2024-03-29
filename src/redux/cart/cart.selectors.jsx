import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount= createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accQuantity, curCartItem) => 
        accQuantity + curCartItem.quantity,0)

)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce(
     (accPrice, curCartItem) =>
     accPrice+ curCartItem.quantity * curCartItem.price,0   
    )

)