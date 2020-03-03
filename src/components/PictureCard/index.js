import React from "react";
import "./style.css";

function PictureCard(props) {
    return (
        <div className="tile is-vertical is-3">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box">
                        <img alt={props.name} src={props.image} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PictureCard;