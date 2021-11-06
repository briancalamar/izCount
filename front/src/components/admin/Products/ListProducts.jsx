import "./ListProducts.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import axios from "axios";
import { getProducts } from "../../../redux/actions/productActions";
import ProductCard from "./ProductCard";

export default function ListProducts() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)

    useEffect(() => {
        if (products === null) {
            const getData = async () => {
                try {
                    const { data } = await axios.get("/product");
                    // console.log(data)
                    dispatch(() => dispatch(getProducts(data)))

                } catch (error) {
                    console.log("ERROR")
                }
            }
            getData()
        }
    }, [dispatch, products])

    return (
        <div className="container-list">
            {
                products !== null && products.length
                    ? products.map((prod, i) =>
                            <ProductCard
                                key={i}
                                name={prod.name}
                                alias={prod.alias}
                                description={prod.description}
                                categories={prod.categories}
                                images={prod.images}
                                price={prod.price}
                            />
                        )
                    : <ProductCard
                        name="Cargando"
                    />
            }
        </div>
    )
}