import axios from "axios";

export const getPokemon = async () => {
	console.log("Real Get");
	return await axios.get("http://localhost:5005/api/v1/pokemon/");
};

// **Read** - Fetch Pokémon by name
export const getPokemonByName = async (name) => {
	console.log("Real Get by Name");
	try {
		const response = await axios.get(
			`http://localhost:5005/api/v1/pokemon/?name=${name}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching Pokémon by name:", error);
		throw error;
	}
};

// **Create** - Save a new Pokémon
export const savePokemon = async (name, type, games) => {
	console.log("Real Post - Save");
	try {
		const response = await axios.post("http://localhost:5005/api/v1/pokemon/", {
			name,
			type,
			games,
		});
		return response.data;
	} catch (error) {
		console.error("Error saving Pokémon:", error);
		throw error;
	}
};

// **Update** - Update an existing Pokémon by name
export const updatePokemon = async (name, type, games) => {
	console.log("Real Edit");
	try {
		const response = await axios.patch(
			`http://localhost:5005/api/v1/pokemon/${name}`,
			{
				type,
				games,
			}
		);
		return response.data;
	} catch (error) {
		console.error("Error updating Pokémon:", error);
		throw error;
	}
};

// **Delete** - Delete a Pokémon by name
export const deletePokemon = async (name) => {
	console.log("Real Delete");
	try {
		const response = await axios.delete(
			`http://localhost:5005/api/v1/pokemon/${name}`
		);
		return response.data;
	} catch (error) {
		console.error("Error deleting Pokémon:", error);
		throw error;
	}
};
