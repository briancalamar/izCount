import "./NavBar.css"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import SideBar from "../admin/sideBar/SideBar";

export default  function NavBar(){
    const [ showBar, setShowBar ] = useState(false);

    return (
        <div className="navbar">
            <div onClick={() => setShowBar(!showBar)} className="nav-div-icon">
                {
                    showBar
                    ? <IoClose />
                    : <FaBars />
                }
            </div>
            <SideBar showBar={showBar} setShowBar={setShowBar}/>
            <div className="nav-div-login">
                INICIAR SESION
            </div>
        </div>
    )
}