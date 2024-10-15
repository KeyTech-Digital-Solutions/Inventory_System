import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const [name, setName] = useState([]);
  const [productCode, setProductCode] = useState([]);
  const [price, setPrice] = useState([]);
  const [cost, setCost] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const navigate = useNavigate();

  const handleSaveProduct = () => {
    const data = {
      name,
      productCode,
      price,
      cost,
      quantity,
    };

    axios
      .post(`http://localhost:4000/api/data/products`, data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <label>Product name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Product code</label>
        <input
          type="text"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Cost</label>
        <input
          type="text"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div>
        <label>Quantity in stock</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSaveProduct}>Save Product</button>
      </div>
    </div>
  );
};
