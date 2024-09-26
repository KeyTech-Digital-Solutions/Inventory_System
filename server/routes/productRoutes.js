const express = require("express");
const Product = require("../models");

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.productCode ||
      !request.body.cost ||
      !request.body.price ||
      !request.body.quantity ||
      !request.body.imageLink
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newProduct = {
      name: request.body.name,
      productCode: request.body.productCode,
      cost: request.body.cost,
      price: request.body.price,
      quantity: request.body.quantity,
      imageLink: request.body.imageLink,
    };
    const product = await Product.create(newProduct);
    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports = router;
