require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const mongoDBURL = require("./config");
const mongoose = require("mongoose");
const routes = require("./routes/productRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("Working!");
});

app.use("/products", routes);

mongoose.connect(mongoDBURL).then(() => {
  console.log("App connected to database");
});
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
