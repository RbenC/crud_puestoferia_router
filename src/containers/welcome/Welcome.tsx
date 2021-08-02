import { Link } from 'react-router-dom'
import styles from './welcome.module.css'

const Welcome = () => {
	return (
		<div className={styles.screenwelcome}>
			<div className="container">
				<div className="row mt-5">
					<div className="col mt-5 px-2 mt-4 display-3">
						¿Buscas las mejores frutas y<br /> verduras?
					</div>
					<div className="col-4 mt-5">
						<img src="../../../imgs/frutas.PNG" alt="logo" width="70%" />
					</div>
				</div>
				<div className="row m-2 p-2">
					Hace cuatro años, nos propusimos crear una alternativa que ofreciera productos de calidad, atención
					personalizada y una experiencia de compra cercana y agradable. Así nació Puesto de Feria
					Santaolalla, con la convicción de entregar a nuestros clientes la mejor calidad, con un alto
					estándar de selección en frutas, verduras y productos gourmet.
				</div>

				<div className="row mt-2 p-2 d-grid ">
					<Link to="/listado" className="d-grid btn btn-outline-success">
						<span className={styles.sizetitle}>Vamos a Comprar!!! </span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Welcome
