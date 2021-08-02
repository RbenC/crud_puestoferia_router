import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextProduct from '../../ContextProduct'

const Listado = () => {
	const context = useContext(ContextProduct)

	return (
		<div className="col-10">
			{
				<div className="card mt-4">
					<div className="card-body">
						{context.products.length > 0 ? (
							<table className="table table-striped">
								<thead>
									<tr>
										<th>Name</th>
										<th>Price</th>
										<th>Image</th>
										<th>Available</th>
										<th className="text-end">Actions</th>
									</tr>
								</thead>
								<tbody>
									{context.products.map((product: any) => (
										<tr key={`${product.id}`}>
											<td>{product.name}</td>
											<td>{product.price}</td>
											<td>
												<img src={product.image} alt={product.name} width="20%" />
											</td>
											<td>
												{product.amount} {product.measure}
											</td>
											<td className="text-end">
												<div className="btn-group">
													<Link
														className="btn btn-primary btn-sm"
														to={`/detail/${product.id}`}
													>
														View
													</Link>
													<Link className="btn btn-info btn-sm" to={`/edit/${product.id}`}>
														Edit
													</Link>
													<Link
														className="btn btn-sm btn-warning"
														to={`/remove/${product.id}`}
													>
														Remove
													</Link>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<div>Not Items</div>
						)}
					</div>
				</div>
			}
		</div>
	)
}

export default Listado
