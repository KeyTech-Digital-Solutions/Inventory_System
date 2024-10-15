import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const ProductView = () => {
  const [product, setProduct]= useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteProduct= async (productId) => {
    await axios
    .delete(`http://localhost:4000/api/data/${productId}`)
    .then(navigate("/"))
 }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/data/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product code: {product.productCode}</p>
      <p>Price: {product.price}</p>
      <p>Cost: {product.cost}</p>
      <p>Quantity in stock: {product.quantity}</p>
      <button onClick={()=>{deleteProduct(product._id)}} >Delete Product</button>
      <Link to={`/EditProduct/${product._id}`}><button>Edit Product</button></Link>
    </div>
  )
}
