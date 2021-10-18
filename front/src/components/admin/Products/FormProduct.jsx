import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../redux/actions/productActions';


export default function FormProduct() {

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: "",
        alias: "",
        description: "",
        image: [],
        price: 0,
        size: [],
        category: [],
    })


    const handleClick = async (e) => {
        e.preventDefault();
        const data = await fetch("http://localhost:3001/product/create", {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        })
        if(data.ok){
            dispatch(createProduct({...form}));

            setForm({
                name: "",
                alias: "",
                description: "",
                image: [],
                price: 0,
                size: [],
                category: [],
            })
        } else alert("Asegurese de ingresar los campos correctamente")

    }

    const handleChange = async (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
 
    return (
        <div>
            <form>
                <input name="name" value={form.name} onChange={handleChange} placeholder="name" />
                <input name="alias" value={form.alias} onChange={handleChange} placeholder="alias"/>
                <input name="description" value={form.description} onChange={handleChange} placeholder="descripion"/>
                <input name="price" value={form.price} onChange={handleChange} placeholder="prices"/>
                <button onClick={handleClick}> CREAR </button>
            </form>
        </div>
    )
}