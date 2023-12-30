import React, { useEffect, useState } from "react";
import ViewStyles from "../css/view.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const ViewProducts = () => {
  let [products, setProducts] = useState({});
  const controller = new AbortController();
  const signal = controller.signal;

  let { pid } = useParams();
  async function getproducts() {
    try {
      let { data } = await axios.get(`http://localhost:3000/products/${pid}`, {
        signal,
      });

      setProducts(data);
    } catch (err) {}
  }
  useEffect(() => {
    getproducts();
    return () => {
      console.log("abort execute view");
      return controller.abort();
    };
  }, []);
  return (
    <div className={ViewStyles.container}>
      <h1>{products.product} details</h1>
      <div className={ViewStyles.cardview}>
        <h3>Product name: {products.product}</h3>
        <h3>Category: {products.category}</h3>
        <h3>Brand: {products.brand}</h3>
        <h3>Quantity: {products.quantity}</h3>
        <h3>Price: {products.price}$</h3>
        <h3>Country: {products.country}</h3>
      </div>
    </div>
  );
};

export default ViewProducts;
