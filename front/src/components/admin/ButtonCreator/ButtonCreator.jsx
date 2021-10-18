import { NavLink } from "react-router-dom";

import "./ButtonCreator.css"

export default function ButtonCreator({ textButton, to }) {

    return (
        <div className="container-button-creator">
            <input type="search" placeholder="Buscador..."/>
            <NavLink to={to}>
                <button > {textButton} </button>
            </NavLink>
        </div>
    )
}