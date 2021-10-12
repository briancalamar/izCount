import "./index.css"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import SideBar from "../sideBar";

export default  function NavBar(){
    const [ showBar, setShowBar ] = useState(false);

    return (
        <div className="navbar">
            <div className="nav-div-icon">
                {
                    showBar
                    ? <IoClose onClick={() => setShowBar(!showBar)}/>
                    : <FaBars onClick={() => setShowBar(!showBar)}/>
                }
            </div>
            <SideBar showBar={showBar} setShowBar={setShowBar}/>
            <div className="nav-div-login">
                INICIAR SESION
            </div>
        </div>
    )
}