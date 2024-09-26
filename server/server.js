const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

const dbURI = 'mongodb+srv://root:60edVdaJb9nNpe9S@keytechinventory.tywfz.mongodb.net/?retryWrites=true&w=majority&appName=KeyTechInventory'
mongoose.connect(dbURI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to MongoDB");
});

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/data", require("./routes/dataRoutes"));

// app.get("/", cors(), async (req, res) => {
//   res.send("Working!");
// });

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});