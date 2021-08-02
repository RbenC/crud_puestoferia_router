import { createContext } from 'react'

const ContextProduct = createContext({
    products: [],
    addProduct: (product: any) => {},
    getProduct: (id: any) => {},
    delProduct: (id: any) => {},
    updateProduct: (product: any) => {},
})

export default ContextProduct
