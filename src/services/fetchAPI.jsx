const API = "./src/data.json";

export const fetchApi = async (key) => {
	try {
		const response = await fetch(API);
		const json = await response.json();
		const data = await json[key];
		return data;
	} catch (error) {
		console.log(error);
	}
};

// ?La siguiente manera es para extraer datos de una API falsa con JsonServer

// const API = "http://localhost:4000"

// export const fetchApi= async(key)=>{
//     const response = await fetch(`${API}/${key}`)
//     const data = await response.json()
//     return data
// }
