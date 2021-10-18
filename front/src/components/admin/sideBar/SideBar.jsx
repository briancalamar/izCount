import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import "./SideBar.css"

import { AiFillHome } from "react-icons/ai"

export default function SideBar({ showBar, setShowBar }) {

    const {pathname} = useLocation()

    return (
        <div className={showBar ? "sidebar side-active" : "sidebar"}>
            <h2 className="title-sidebar">CS Cactus y Suculentas</h2>
            <ul>
                <NavLink to="/">
                    <li 
                    className={ pathname === "/" ? "sidebar-selected" : ""}
                    onClick={() => setShowBar(!showBar)}>
                        <AiFillHome/>    INICIO
                    </li>
                </NavLink>
                <NavLink to="/ventas">
                    <li 
                    className={ pathname === "/ventas" ? "sidebar-selected" : ""}
                    onClick={() => setShowBar(!showBar)}>
                    VENTAS
                    </li>
                </NavLink>
                <NavLink to="/gastos">
                    <li 
                    className={ pathname === "/gastos" ? "sidebar-selected" : ""}
                    onClick={() => setShowBar(!showBar)}>
                    COMPRAS / GASTOS
                    </li>
                </NavLink>
                <NavLink to="/productos">
                    <li 
                    className={ pathname === "/productos" ? "sidebar-selected" : ""}
                    onClick={() => setShowBar(!showBar)}>
                    PRODUCTOS
                    </li>
                </NavLink>
                <NavLink to="/categorias">
                    <li 
                    className={ pathname === "/categorias" ? "sidebar-selected" : ""}
                    onClick={() => setShowBar(!showBar)}>
                    CATEGORIAS
                    </li>
                </NavLink>
                <NavLink to="/tamaños">
                    <li 
                    className={ pathname === "/tamaños" ? "sidebar-selected" : ""}
                    onClick={() => setShowBar(!showBar)}>
                    TAMAÑOS
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}