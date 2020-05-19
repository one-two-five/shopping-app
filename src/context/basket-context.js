import React, {useState, createContext} from 'react'

export const BasketContext = createContext();

export const BasketContextProvider = props => {
    const [count, setCount] = useState(0);

    return (
        <BasketContext.Provider value={[count, setCount]}>
            { props.children }
        </BasketContext.Provider>
    );
};