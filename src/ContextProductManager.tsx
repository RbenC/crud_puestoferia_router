import { useState } from 'react'
import ContextProduct from './ContextProduct'
import data from './data/dataSucursal1.json'
const { v4: uuidv4 } = require('uuid')

interface ContextProductManagerProps {
	children: JSX.Element
}

function ContextProductManager({ children }: ContextProductManagerProps) {
	const [ products, setProducts ] = useState<any>(data)

	const addProduct = (product: any) => {
		// generamos un id a partir de la fecha para luego poder buscar
		// ademas de esta manera no se repetira una forma alterna es usar la librería uuid
		// const id = new Date().getTime()
		const id = uuidv4()
		console.log(id)
		const newData = [ ...products, { id, ...product } ]
		setProducts(newData)
	}

	const delProduct = (id: any) => {
		console.log(`delete ${id}`)
		const newData = products.filter((e: any) => e.id !== id)
		setProducts(newData)
	}

	const getProduct = (id: any) => {
		return products.find((e: any) => e.id === id)
	}

	const updateProduct = (product: any) => {
		// console.log(product)
		const newData = products.map((p: any) => {
			if (p.id === product.id) {
				return { ...product }
			}
			return p
		})
		setProducts(newData)
	}

	return (
		<ContextProduct.Provider
			value={{
				products,
				addProduct,
				delProduct,
				getProduct,
				updateProduct
			}}
		>
			{children}
		</ContextProduct.Provider>
	)
}

export default ContextProductManager
