// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

// Global variables
const port = 8800;
const appData = {};

// Start up an instance of app
app.listen(port, listening);

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

app.get("/get", (req, res) => {
  res.send(projectData);
});

app.post("/add", addWitherData);

function addWitherData(req, res) {
  console.log(req.body);
  data.push(req.body);
  res.send(JSON.stringify(data));
}
