import { useState, useContext, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import ContextProduct from '../../ContextProduct'

const Remove = () => {
	const { id }: { id: string } = useParams()
	const [ product, setProduct ]: any = useState({})
	const context = useContext(ContextProduct)
	const history = useHistory()

	useEffect(
		() => {
			// const p: any = context.getProduct(Number.parseInt(id))
			const p: any = context.getProduct(id)

			setProduct(p)
		},
		[ context, id ]
	)

	const handlerRemove = () => {
		context.delProduct(id)
		history.push('/listado')
	}

	return (
		<div className="row">
			<div className="col-12 col-sm-6 offset-sm-3">
				{product ? (
					<div className="card mt-4">
						<div className="card-header">
							Confirm delete {product.name} ({product.id})?
						</div>
						<div className="card-body">price: {product.price}</div>
						<div className="card-footer">
							<div className="btn-group">
								<button className="btn btn-danger btn-sm" onClick={handlerRemove}>
									Yes
								</button>
								<Link to="/listado" className="btn btn-primary btn-sm">
									No
								</Link>
							</div>
						</div>
					</div>
				) : (
					<div className="alert alert-danger mt-4">
						<div>Not Found</div>
						<Link to="/listado" className="btn btn-danger btn-sm">
							Go to home
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Remove
