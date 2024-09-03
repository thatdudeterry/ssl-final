import axios from "axios";
const API_BASE_URL = "http://localhost:5005/api/v1/pokemon";

const API = Object.create(null);

//
API.fetchPokemon = async () => {
	const respomse = await axios.get(`${API_BASE_URL}`);
	console.log("--->", response);
};

API.findPokemon = async (pokemon) => {
	const respomse = await axios.post(`${API_BASE_URL}, pokemon`);
	console.log("--->", response);
};

// ^ Below fetches all on page load
// API.fetchPokemon = async () => {
// 	try {
// 		const response = await axios.get(`${API_BASE_URL}`);
// 		console.log("API.jsx fetchPokemon", response);
// 		return response.data.results;
// 	} catch (error) {
// 		console.error("Error fetching Pokémon:", error);
// 		throw error;
// 	}
// };

API.getPokemonByName = async (pokemon) => {
	try {
		const response = await axios.get(`${API_BASE_URL}?name=${pokemon}`);
		console.log("API.jsx fetchPokemon", response);
		return response.data.results;
	} catch (error) {
		console.error("Error fetching Pokémon:", error);
		throw error;
	}
};

API.getPokemonById = async (id) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/${id}`);
		console.log("findPokemon response:", response);
		return response.data;
	} catch (error) {
		console.error("Error finding Pokémon:", error);
		throw error;
	}
};

API.createPokemon = async (pokemon) => {
	try {
		const response = await axios.post(API_BASE_URL, pokemon);
		console.log("createPokemon response:", response);
		return response.data;
	} catch (error) {
		console.error("Error creating Pokémon:", error);
		throw error;
	}
};

API.updatePokemon = async (id, pokemon) => {
	try {
		const response = await axios.put(`${API_BASE_URL}/${id}`, pokemon);
		console.log("updatePokemon response:", response);
		return response.data;
	} catch (error) {
		console.error("Error updating Pokémon:", error);
		throw error;
	}
};

API.deletePokemon = async (id) => {
	try {
		const response = await axios.delete(`${API_BASE_URL}/${id}`);
		console.log("deletePokemon response:", response);
		return response.data;
	} catch (error) {
		console.error("Error deleting Pokémon:", error);
		throw error;
	}
};

export default API;
