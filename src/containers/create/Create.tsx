import { useContext } from "react"
import FormularioCreacion from "../../components/formulario-creacion/FormularioCreacion"
import ContextProduct from "../../ContextProduct"

const Create = () => {
    const context = useContext(ContextProduct)
    return (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                <FormularioCreacion onSubmit={context.addProduct} />
            </div>
        </div>
    )
}

export default Create
