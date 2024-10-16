const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Data = require("../models/Data");

//GET ALL
router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET BY ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Data.findById(id);
    return response.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// POST
router.post("/products", (req, res) => {
  const { name, productCode, cost, price, quantity } = req.body;

  const newProduct = new Data({
    name,
    productCode,
    cost,
    price,
    quantity,
  });

  const savedProduct = newProduct.save();

  if (!name || !productCode) {
    return res
      .status(400)
      .json({ message: "Name and Product Code are required" });
  }

  res.status(201).json({
    message: "Data received",
    data: { name, productCode, cost, price, quantity },
  });
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const deletedData = await Data.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json({ message: "Data deleted successfully", deletedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
