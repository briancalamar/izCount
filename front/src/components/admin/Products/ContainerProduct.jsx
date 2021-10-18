import ButtonCreator from "../ButtonCreator/ButtonCreator";

import "./ContainerProduct.css";
import ListProducts from "./ListProducts";


export default function ContainerProduct() {

    // const handleClick = async () => {
    //     const data = await fetch("http://localhost:3001/product")
    //     const datajson = await data.json();
    //     console.log(datajson)
    // }

    return (
        <div className="container">
            <ButtonCreator to="/productos/crear" textButton="CREAR PRODUCTO"/>
            <ListProducts/>
            {/* <button onClick={handleClick}> Peticion </button> */}
        </div>
    )
}