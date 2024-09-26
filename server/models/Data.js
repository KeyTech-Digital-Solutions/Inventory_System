const mongoose = require("mongoose");

//defines perameters for book model
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productCode: {
      type: String,
      required: false,
    },
    cost: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    imageLink: {
      type: String,
      required: false,
    },
  },
  { timeStamps: true }
);

//exports book model
module.exports = mongoose.model("Data", productSchema);
