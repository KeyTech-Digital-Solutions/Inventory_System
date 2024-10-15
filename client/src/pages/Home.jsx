import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/api/data")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Inventory</h1>
      </div>
      <div>
        {loading ? (
          <div> Loading... </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Code</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <Link to={`/product/view/${product._id}`}>
                    <td>{product.name}</td>
                  </Link>
                  <td>{product.productCode}</td>
                  <td>{product.quantity} </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Link to="product/create">
        <button>Add Product</button>
      </Link>
    </div>
  );
};
