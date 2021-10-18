import { useState } from "react"
import "./Product.css"

export default function Product({
    images,
    name,
    alias,
    price,
    description,
    categories
}) {

    const [showSecondary, setShowSecondary] = useState(false);

    const handleShow = () => {
        setShowSecondary(!showSecondary);
    }
    const handleDelete = () => {
        setShowSecondary(!showSecondary);
    }
    const handleEdit = () => {
        setShowSecondary(!showSecondary);
    }

    return (
        <div className="product">
            <div className="primary-info-product">
                <div className="primary-info-product-imginfo">
                    <img
                        className="image-primary-info-product"
                        src={
                            images && images.length
                                ? images[0]
                                : "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
                        } alt={name || "nombre"} />
                    <div className="info-primary-info-product">
                        <h2>{name || "Nombre no encontrado"}</h2>
                        <p>{alias || "Alias no encontrado"}</p>
                        <h2>$ {price || 0}</h2>
                    </div>
                </div>
                <button
                    className="edit-btn btn"
                    onClick={handleEdit}
                >Editar</button>
                <button
                    className="delete-btn btn"
                    onClick={handleDelete}
                >Eliminar</button>
                <button
                    className="viewinfo-btn btn"
                    onClick={handleShow}
                >+INFO</button>

            </div>
            <div className={
                showSecondary
                    ? "secondary-info-product secondary-show"
                    : "secondary-info-product"
            }>
                <div className="categories-secondary-info-product">
                    <p>CATEGORIAS</p>
                    <ul>
                        {
                            categories?.forEach((category) => {
                                <li>{category.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="description-secondary-info-product">
                    <p>DESCRIPCION</p>
                    <p>{description || "Sin descripcion"}</p>
                </div>
            </div>
        </div>
    )
}