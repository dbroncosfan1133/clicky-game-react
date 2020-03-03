import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="hero is-dark is-large">
            <nav className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <h1 className="navbar-item" id="clicky_game">Clicky Game</h1>
                    </div>
                    <div className="navbar-end">
                        <h1 className="navbar-item" id="score">Score: </h1>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;