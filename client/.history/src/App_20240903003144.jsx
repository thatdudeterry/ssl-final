import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
// import Pokemon from "./components/Pokemon.jsx";
import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";
import {
	getPokemon,
	// savePokemon,
	// updatePokemon,
	// deletePokemon,
} from "./services/pokemonService.js";
import API from "./API.jsx";
import Header from "./components/Header.jsx";

function App() {
	const [pokemon, setPokemon] = useState([]);

	const handleSearch = async (event) => {
		event.preventDefault();
		console.log("Search button clicked", event.target.search.value);
		const data = await API.fetchPokemon();
		console.log("From thePokemonDatabase API", data);
		// setPokemon(response.data.data);
	};

	useEffect(() => {
		getPokemon()
			.then((result) => {
				setPokemon(result.data.data);
				console.log(result.data.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	// useEffect(() => {
	// 	savePokemon()
	// 		.then((result) => {
	// 			setPokemon(result.data.data);
	// 			console.log(result.data.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	updatePokemon()
	// 		.then((result) => {
	// 			setPokemon(result.data.data);
	// 			console.log(result.data.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	deletePokemon()
	// 		.then((result) => {
	// 			setPokemon(result.data.data);
	// 			console.log(result.data.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// }, []);

	const [editingPokemon, setEditingPokemon] = useState(null);

	const handleEdit = (pokemon) => {
		setEditingPokemon(pokemon);
	};

	const handleSave = () => {
		setEditingPokemon(null);
		// fetchData();
	};

	return (
		<>
			<Header style={styles.imageWrapper} />
			<div className="App" style={styles.main}>
				<div className="search-container" style={styles.search}>
					<h1>thePokemonDatabase</h1>
					<SearchBar onSubmit={handleSearch} />
				</div>
				<div className="main-content" style={styles.conatiner}>
					{/* <section className="pokemon-form" style={styles.form}>
						<PokemonForm pokemonToEdit={editingPokemon} onSave={handleSave} />
					</section>
					<aside className="pokemon-list" style={styles.list}>
						<PokemonList pokemon={pokemon} onEdit={handleEdit} />
					</aside> */}
				</div>
			</div>
		</>
	);
}

export default App;

const styles = {
	main: {
		textAlign: "center",
	},
	imageWrapper: {
		width: "100%",
		textAlign: "center",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "250px",
		objectFit: "cover",
		objectPosition: "center",
	},
	container: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		padding: "20px",
		boxSizing: "border-box",
		borderTop: "2px solid #f0f0f0",
		fontFamily: "Press Start 2P",
	},
	form: {
		flex: "1",
		paddingRight: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		borderRight: "2px solid #f0f0f0",
	},
	list: {
		flex: "2",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: "10px",
		alignItems: "flex-start",
	},
};
