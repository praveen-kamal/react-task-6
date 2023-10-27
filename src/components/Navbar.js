import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="name">Praveen Kamal</div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
