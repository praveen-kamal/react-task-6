import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="name">
                <a href="#home">Praveen Kamal</a>
            </div>
            <div className="links">
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
