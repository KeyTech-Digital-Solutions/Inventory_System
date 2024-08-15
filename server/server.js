const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
    res.send("Working!")
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
