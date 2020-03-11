import React from "react";
import "./style.css";

const PictureCard = props => (
	<div 
	className="tile is-child box image_tiles" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt={props.name}
		/>
	</div>
);

export default PictureCard;