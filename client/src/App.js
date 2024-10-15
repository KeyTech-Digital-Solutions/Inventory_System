import React from 'react';
//import DisplayData from './DisplayData';
import {Home} from "./pages/Home";
import {CreateProduct} from "./pages/CreateProduct";
import { EditProduct } from './pages/EditProduct';
import { ProductView } from './pages/ProductView';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product/create" element={<CreateProduct />} />
     <Route path="/product/view/:id" element={<ProductView />} />
     <Route path="/EditProduct/:id" element={<EditProduct />} />
  </Routes>
  );
};

export default App;
