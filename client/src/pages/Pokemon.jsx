import React, { useEffect, useState } from "react";
import {
	savePokemon,
	getPokemon,
	// updatePokemon,
	// deletePokemon,
} from "../services/pokemonService.js";
import Title from "../components/Title.jsx";
import PokemonList from "../components/PokemonList.jsx";
import PokemonForm from "../components/PokemonForm.jsx";

function Pokemon() {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [games, setGames] = useState("");
	const [resp, setResp] = useState("");
	const [pokemon, setPokemon] = useState([]);

	const getInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(value);
	};

	const nameInput = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	};

	const typeInput = (e) => {
		console.log(e.target.value);
		setType(e.target.value);
	};

	const gamesInput = (e) => {
		console.log(e.target.value);
		setGames(e.target.value);
	};

	const addPokemon = (e) => {
		e.preventDefault();
		savePokemon(name, type, games)
			.then((result) => {
				setName("");
				setType("");
				setGames("");
				setResp(result.data.message);
				setPokemon(result.data.result);
			})
			.catch((err) => {
				console.log("Error: ", err.message);
				setResp("Error: ", err.message);
			});
		console.log(addPokemon);
	};

	return (
		<section style={styles.container}>
			<h1>Pokemon</h1>
			<Title />
			<PokemonForm
				// getInput={getInput}
				addPokemon={addPokemon}
				nameInput={nameInput}
				typeInput={typeInput}
				gamesInput={gamesInput}
			/>

			<PokemonList pokemons={pokemons} />
		</section>
	);
}
export default Pokemon;

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px",
		backgroundColor: "#f9f9f9",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	},
	header: {
		fontSize: "2rem",
		color: "#333",
		marginBottom: "20px",
	},
	response: {
		marginTop: "20px",
		color: "#e74c3c",
	},
};
