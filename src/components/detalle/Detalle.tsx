interface DetalleProps {
	product: any
	onClose: () => void
}

const Detalle = ({ product, onClose }: DetalleProps) => {
	return product ? (
		<div>
			<div className="card mt-4">
				<div className="card-body">
					{product.name} | {product.price} | {product.amount} | {product.measure}| {product.image}
				</div>

				<div className="card-footer">
					<button className="btn btn-danger" onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	) : (
		<span />
	)
}

export default Detalle
