import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"

import { getSizes } from '../../../redux/actions/sizeActions'
import { getCategories } from '../../../redux/actions/categoryActions'
import { createProduct } from '../../../redux/actions/productActions'

import './FormProduct.css'
import ChoiseOptions from '../../extraComponents/ChoiseOptions/ChoiseOptions';


export default function FormProduct() {

    const categories = useSelector(state => state.category.categories)
    // const categories = [
    //     {
    //         id: 1,
    //         name: "cactus"
    //     },
    //     {
    //         id: 2,
    //         name: "suculentasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    //     },
    //     {
    //         id: 3,
    //         name: "pinchudas"
    //     }
    // ]
    const sizes = useSelector(state => state.size.sizes)
    const dispatch = useDispatch()
    const [formCategory, setFormCategory] = useState([])
    const [form, setForm] = useState({
        name: "",
        alias: "",
        description: "",
        price: 0,
        image: [],
        size: [],
    })

    useEffect(() => {

        if (categories === null) {
            const getData = async () => {
                try {
                    const { data } = await axios.get("/category");
                    dispatch(() => dispatch(getCategories(data)))

                } catch (error) {
                    console.log("ERROR")
                }
            }
            getData()
        }
        if (sizes === null) {
            const getData = async () => {
                try {
                    const { data } = await axios.get("/size");
                    // console.log(data)
                    dispatch(() => dispatch(getSizes(data)))

                } catch (error) {
                    console.log("ERROR")
                }
            }
            getData()
        }
    }, [form, setForm])


    const handleClick = async (e) => {
        e.preventDefault();
        const data = await fetch("http://localhost:3001/product/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        })
        if (data.ok) {
            dispatch(createProduct({ ...form }));

            setForm({
                name: "",
                alias: "",
                description: "",
                price: "",
                image: [],
                size: [],
                category: [],
            })
        } else alert("Asegurese de ingresar los campos correctamente")

    }

    const handleChange = async (e) => {
        e.preventDefault()
        let name = e.target.name;
        let value = e.target.value

        setForm({
            ...form,
            [name]: value,
        })
    }

    return (
        <form className="form-product">
            <h1>CREAR PRODUCTO</h1>
            <div className="inputs">
                <label htmlFor="name">Nombre</label>
                <input name="name" id="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
            </div>
            <div className="inputs">
                <label htmlFor="alias">Alias</label>
                <input name="alias" id="alias" value={form.alias} onChange={handleChange} placeholder="Alias" />
            </div>
            <div className="inputs">
                <label htmlFor="description">Descripcion</label>
                <input name="description" id="description" value={form.description} onChange={handleChange} placeholder="Descripcion" />
            </div>
            <div className="inputs">
                <label htmlFor="price">Precio</label>
                <input type="number" name="price" id="price" value={form.price} onChange={handleChange} placeholder="Precio" />
            </div>
            <div className="form-p-category">
                <h3>CATEGORIAS</h3>
                <ChoiseOptions
                    state={formCategory}
                    setState={setFormCategory}
                    data={categories}
                />
            </div>
            <button onClick={handleClick}> CREAR </button>
        </form>
    )
}