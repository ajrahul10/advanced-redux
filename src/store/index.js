import { combineReducers, createStore } from 'redux'

const updateCartInitialState = {
    title: 'Test Item', quantity: 0, total: 0, price: 6
}

const updateCartReducer = (state = updateCartInitialState, action) => {
    if (action.type === "cart/add") {
        let newCount = state.quantity >= 0 ? state.quantity + 1 : 0
        return {
            ...state,
            quantity: newCount,
            total: state.price * newCount
        }
    } else if (action.type === "cart/remove") {
        let newCount = state.quantity > 0 ? state.quantity - 1 : 0
        return {
            ...state,
            quantity: newCount,
            total: state.price * newCount
        }
    }
    else {
        return state
    }
}

const toggleCartInitialState = {
    showCart: true
}

const toggleCartReducer = (state = toggleCartInitialState, action) => {
    if (action.type === "cart/toggleCart") {
        return {
            showCart: !state.showCart
        }
    } else {
        return state
    }
}

const rootReducer = combineReducers({
    updateCart: updateCartReducer,
    toggleCart: toggleCartReducer
})

const store = createStore(rootReducer)

export default store;