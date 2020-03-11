import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="hero is-dark is-medium">
            <div className="hero-body has-text-centered">
                <h1 className="title" id="clicky_game">Clicky Game</h1>
                <h3 className="subtitle">Click on the images below to earn points, if you earn 12 points
                you WIN!  The trick is to not click on the same image twice, or you LOSE!</h3>
            </div>
        </div>
    );
}

export default Navbar;