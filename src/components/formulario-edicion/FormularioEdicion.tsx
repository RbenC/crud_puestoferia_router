import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../useInput'
import styles from './FormularioEdicion.module.css'

interface FormProps {
	onSubmit: (product: any) => void
	product: any
}

const FormularioEdicion = ({ onSubmit, product }: FormProps) => {
	const [ name, setName, setNameValue ] = useInput('')
	const [ price, setPrice, setPriceValue ] = useInput(`0`)
	const [ amount, setAmount, setAmountValue ] = useInput('0')
	const [ measure, setMeasure, setMeasureValue ] = useInput('Kg')
	const [ image, setImage, setImageValue ] = useInput('https://')
	const disabled = () => name === '' || price === '' || amount === '' || measure === '' || image === ''
	const history = useHistory()

	useEffect(
		() => {
			setNameValue(product.name)
			setPriceValue(product.price)
			setAmountValue(product.amount)
			setMeasureValue(product.measure)
			setImageValue(product.image)
		},
		[ product, setNameValue, setPriceValue, setAmountValue, setMeasureValue, setImageValue ]
	)

	const validNumber = (p: string) => {
		if (p === '') return ''
		const n = Number.parseInt(p) * 1
		return n
	}

	const handlerSubmit = (event: any) => {
		event.preventDefault()
		onSubmit({
			id: product.id,
			name,
			price,
			amount,
			measure,
			image
		})
		setNameValue('')
		setPriceValue('0')
		setAmountValue('0')
		setMeasureValue('Kg')
		setImageValue('https://')
		history.push('/listado')
	}
	return (
		<div>
			<form onSubmit={handlerSubmit} className={styles.form}>
				<div className="card mt-4">
					<div className={styles.cardHeader}>Edit Product</div>
					<div className="card-body">
						<label className={styles.label}>Name</label>
						<input className="form-control" value={name} onChange={setName} />
						<label className={styles.label}>Price</label>
						<input
							className="form-control"
							min={0}
							type="number"
							value={validNumber(price)}
							onChange={setPrice}
						/>
						<input
							className="form-control"
							min={0}
							type="number"
							value={validNumber(price)}
							onChange={setPrice}
						/>
						<label className={styles.label}>Amount</label>
						<input
							className="form-control"
							min={0}
							type="number"
							value={validNumber(amount)}
							onChange={setAmount}
						/>
						<label className={styles.label}>Measure</label>
						<input className="form-control" type="text" value={measure} onChange={setMeasure} />
						<label className={styles.label}>Imagen</label>
						<input className="form-control" type="text" value={image} onChange={setImage} />
					</div>
					<div className={styles.cardFooter}>
						<div className="btn-group">
							<button className="btn btn-primary btn-sm" disabled={disabled()}>
								Save
							</button>
							<Link to="/listado" className="btn btn-secondary btn-sm">
								Go to home
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default FormularioEdicion
