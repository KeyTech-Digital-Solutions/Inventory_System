const mongoose=require("mongoose")

//defines perameters for book model
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productCode: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

//exports book model
module.exports = mongoose.model("Product", productSchema);
