import { useState } from "react";

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleChange = (event) => {
		console.log("event.target.value:", event.target.search.value);

		setTerm(event.target.value);
	};

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
			{query.length < 3 && <p>Search query must be at least 3 characters</p>}
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchBar;
