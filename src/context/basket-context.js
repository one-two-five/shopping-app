import React, {createContext, useReducer} from 'react'

export const BasketContext = createContext();

const INITIAL_STATE = {
    products: {
        
    }
}

const ADD_PRODUCT = "ADD_PRODUCT"
const DELETE_PRODUCTS = "DELETE_PRODUCTS"

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                products: {...state.products, [action.payload.id]: action.payload.data }
            };
        case DELETE_PRODUCTS:
            break;
        default:
            return INITIAL_STATE
    }
}

export const BasketContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <BasketContext.Provider value={[state, dispatch]}>
            { props.children }
        </BasketContext.Provider>
    );
};