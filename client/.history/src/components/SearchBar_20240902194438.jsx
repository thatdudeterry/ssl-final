import { useState } from "react";
// import { getPokemon } from "../services/pokemonService.js";

function SearchBar({ onSubmit }) {
	const [query, setQuery] = useState("");

	const handleChange = (event) => {
		console.log("event.target.value:", event.target.value);
		setQuery(event.target.value);
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	onSubmit(query);
	// };

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="search">Search: </label>
			<input
				type="text"
				id="search"
				name="search"
				value={query}
				onChange={handleChange}
				placeholder="Search by Pokémon ID or name"
			/>
			{/* <br></br>
			<label htmlFor="search">Search by name: </label>
			<input
				type="text"
				id="search"
				name="name"
				// value={query}
				// onChange={handleChange}
				// placeholder="Search by Pokémon ID or name"
			/>
			<br></br>
			<label htmlFor="search">Search by type: </label>
			<input
				type="text"
				id="search"
				name="type"
				// value={query}
				// onChange={handleChange}
				// placeholder="Search by Pokémon ID or name"
			/>
			<br></br>
			<label htmlFor="search">Search by game: </label>
			<input
				type="text"
				id="search"
				name="games"
				// value={query}
				// onChange={handleChange}
				// placeholder="Search by Pokémon ID or name"
			/> */}
			{query.length < 3 && <p>Search query must be at least 3 characters</p>}
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchBar;
