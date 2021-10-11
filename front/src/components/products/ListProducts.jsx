import axios from "axios"

export default function ListProducts () {

    const handleClick = async () => {
        const data = await fetch("http://localhost:3001/product")
        const datajson = await data.json();
        console.log(datajson)
    }

    return (
        <div>
            <button onClick={handleClick}> Peticion </button>
        </div>
    )
}