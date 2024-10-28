// const express = require("express");
// const fs = require("fs"); // For reading data from the filesystem
// const app = express();
// const cors = require("cors"); // To allow cross-origin requests

// app.use(cors({ origin: "https://SahilDhage555.github.io" })); // Enable CORS for all routes

// // Route to get the vehicle location data
// app.get("/api/vehicle", (req, res) => {
//   // Read vehicle location data from dummy.json in the Data folder
//   fs.readFile(__dirname + "/Data/dummy.json", "utf8", (err, data) => {
//     if (err) throw err; // Handle any read errors
//     res.send(JSON.parse(data)); // Send JSON-parsed data as the response
//   });
// });

// const PORT = process.env.PORT || 3000; // Define the server's port
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`); // Log server status
// });


const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "https://SahilDhage555.github.io" }));

// Route to get the vehicle location data
app.get("/api/vehicle", (req, res) => {
  fs.readFile(__dirname + "/Data/dummy.json", "utf8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

// Secure endpoint to fetch Google Maps API key
app.get("/api/key", (req, res) => {
  res.json({ apiKey: process.env.MAPS_API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
