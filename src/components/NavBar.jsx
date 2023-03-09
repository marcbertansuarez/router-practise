import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
                <li><NavLink to="projects">Projects</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;