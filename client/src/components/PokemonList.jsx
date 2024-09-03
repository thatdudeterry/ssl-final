import React from "react";

const PokemonList = ({
	pokemon,
	// _id,
	// removePokemon,
	// editPokemon
}) => {
	if (!pokemon || pokemon.length === 0) {
		return <p>No Pokémon found.</p>;
	}
	console.log("pokemon list", pokemon);

	// removePokemon();
	// editPokemon();

	return (
		<>
			{pokemon.map((pokemon) => (
				<article key={pokemon._id} style={styles.list}>
					<h2>{pokemon.name}</h2>
					<p>Type: {pokemon.type}</p>
					<p>Games: {pokemon.games}</p>
					{/* <button onClick={() => removePokemon(_id)}>Delete</button>
					<button onClick={() => editPokemon(_id)}>Edit</button> */}
				</article>
			))}
		</>
	);
};

PokemonList.propTypes = {
	// _id: PropTypes.array.isRequired,
	// pokemonArray: PropTypes.array.isRequired,
	// removePokemon: PropTypes.func.isRequired,
	// editPokemon: PropTypes.func.isRequired,
};

export default PokemonList;

const styles = {
	list: {
		padding: "0.5%",
		marginTop: "0.5%",
	},
};

// import Pokemon from "./Pokemon.jsx";

// function PokemonList({ pokemon }) {
// 	return (
// 		<>
// 			{pokemon.map((pokemon) => (
// 				<Pokemon name={pokemon.name} key={pokemon._id} />
// 			))}
// 		</>
// 	);
// }

// export default PokemonList;
