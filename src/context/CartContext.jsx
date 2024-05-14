import react, { createContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd, count) => {
        const newProduct = {
            ...productToAdd,
            count
        }
        
        if(isInCart(newProduct.id)){
            const updateCart = cart.map((el) => {
                if(el.id === newProduct.id){
                    if((el.count + newProduct.count) > el.stock){
                        return { ...el, count: el.stock}
                    }
                    else{
                        return { ...el, count: el.count + newProduct.count}
                    }
                }
                return el
            })
            setCart(updateCart)
        }
        else{
            setCart([...cart, newProduct])
        }
    }

    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter((prod) => prod.id !== id)
        setCart([...deleteItem])
    }
    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.precio * item.count, 0)
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.count
        })
        return total
    }

    return(
        <Context.Provider
            value={{
                cart,
                addItem,
                removeItem,
                getTotal,
                clearCart,
                getQuantity
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context