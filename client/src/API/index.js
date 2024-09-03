import axios from "axios";

const API = Object.create(null);
API.fetchPokemon = async (/*query = ""*/) => {
	const response = await axios.get("http://localhost:5005/api/v1/pokemon/", {});
	console.log(response);
	return response.data.results;
};

export default API;

// createPokemon: async (pokemonData) => {
// 	try {
// 		const response = await axios.post("/api/v1/pokemon", {
// 			pokemon: pokemonData,
// 		});
// 		return response;
// 	} catch (error) {
// 		console.error("Error creating Pokémon:", error);
// 		throw error;
// 	}
// },

// updatePokemon: async (id, pokemonData) => {
// 	try {
// 		const response = await axios.put(`/api/v1/pokemon/${id}`, pokemonData);
// 		return response;
// 	} catch (error) {
// 		console.error("Error updating Pokémon:", error);
// 		throw error;
// 	}
// },

// deletePokemon: async (id) => {
// 	try {
// 		const response = await axios.delete(`/api/v1/pokemon/${id}`);
// 		return response;
// 	} catch (error) {
// 		console.error("Error deleting Pokémon:", error);
// 		throw error;
// 	}
// },
// };
