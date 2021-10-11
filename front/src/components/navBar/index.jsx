import "./index.css"
import { FaBars } from "react-icons/fa"
import { useState } from "react"

export default  function NavBar(){
    const [ showBar, setShowBar ] = useState(false);

    return (
        <div className="navbar">
            <div className="nav-div-icon">
                <FaBars onClick={() => setShowBar(!showBar)}/>
            </div>
        </div>
    )
}