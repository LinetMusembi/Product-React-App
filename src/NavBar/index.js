import React from "react";
import './index.css'
const NavBar = () => {
    return(
        <div className="navbar">
            <li><a href="/login">Login</a></li>
            <li><a href="/products"> Products</a></li>
        </div>
    )
}
export default NavBar;