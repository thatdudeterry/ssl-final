import React from "react";

function Pokemon({ pokemon }) {
	const { name, type, height, weight, abilities, moves, games } = pokemon;
	return (
		<>
			<h3>{name}</h3>
			<p>{type}</p>
			{/* <p>{height}</p>
			<p>{weight}</p>
			<p>{abilities}</p>
			<p>{moves}</p> */}
			<p>{games}</p>
		</>
	);
}

export default Pokemon;
