'use client'

import { createContext, useState, useContext, useEffect } from "react"

const BasketContext = createContext()


export function BasketProvider({children}) {
    const [items, setItems] = useState([]);

    // load one time when the app starts
    useEffect(() => {
        const storedItems = localStorage.getItem("basket");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // save to localStorage whenever items change
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(items));
    }, [items]);

    const addToBag = (product, quantity) => {
        setItems((prevItems) => {
            if (prevItems.find(item => item.id === product.id)) {
                return prevItems; 
            }
            return [...prevItems, {...product, quantity}];
        })
    }

    const removeFromBag = (productId) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.id !== productId);
        })
    }

    const updateQuantity = (productId, quantity) => {
        setItems((prevItems) => {
            return prevItems.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity };
                }
                return item;
            })
        })
    }

    const emptyBasket = () => {
        setItems([]);
    }

    return (
        <BasketContext.Provider value={{ items, addToBag, removeFromBag, updateQuantity, emptyBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export function useBasket() {
    return useContext(BasketContext)
}
