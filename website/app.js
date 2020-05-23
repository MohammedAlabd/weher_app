/* Global Variables */
const API_KEY = "a40a2afb0c98202f983b52b6a9719f0f";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const LOCAL_URL = "http://localhost:8800/add";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const getWetherData = async (BASE_URL, KEY = null) => {
  const zipCode = document.querySelector("#city").value;
  const userInput = document.querySelector("#feelings").value;
  const requestURL = KEY ? `${BASE_URL}?q=${zipCode}&appid=${KEY}` : URL;
  console.log(requestURL);

  const res = await fetch(requestURL);
  postData("localhost:");
  try {
    const json = await res.json();
    console.log("get",json);
    const dataToPost = {
      temperature: json.main.temp,
      date: new Date().toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      user_response: userInput,
    };
    postData(LOCAL_URL, dataToPost);
  } catch (error) {
    console.error("error", error);
  }
};

const postData = async (URL, dataToPost) => {
  const optionJSON = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPost),
  };

  const res = await fetch(URL, optionJSON);
  try {
    const json = await res.json();
    renderLastUpdate(json)
    return json;
  } catch (error) {
    console.error("error", error);
  }
};

const renderLastUpdate = (json) => {
    document.querySelector("#temp").innerHTML = `<P>${json.temperature}</p>`
    document.querySelector("#content").innerHTML = `<P>${json.user_response}</p>`
    document.querySelector("#date").innerHTML = `<P>${json.date}</p>`
}

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  getWetherData(BASE_URL, API_KEY);
});
