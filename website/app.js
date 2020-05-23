/* Global Variables */
const API_KEY = OpenWeatherMap.com;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

fetchWether = async (URL, KEY = null) => {
    const requestURL = KEY ? `${URL}&appid=${KEY}` : URL
    const fetchedData = await fetch (requestURL)
    try {
        const json = await fetchedData.json() 
        return json
    }catch(error){
        console.error("error", error)
    }
};
