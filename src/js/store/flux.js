const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
		},

		actions: {
			getCharacters: async () => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/people/`);
					const data = await res.json();
					setStore({ characters: data.result });
					console.log(data.result);
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			}
		}
	};
};

export default getState;
