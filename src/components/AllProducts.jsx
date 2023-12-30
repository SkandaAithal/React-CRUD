import React, { useEffect, useState } from "react";
import axios from "axios";
import AllproductsStyles from "../css/allproducts.module.css";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  let [products, setProducts] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;
  let navigateToOtherComponent = useNavigate();
  async function getproducts() {
    try {
      let { data } = await axios.get("http://localhost:3000/products", {
        signal,
      });
      setProducts(data);
    } catch (err) {}
  }

  useEffect(() => {
    getproducts();
    return () => {
      console.log("abort execute allproducts");
      return controller.abort();
    };
  }, []);

  function viewData(id) {
    navigateToOtherComponent(`/allproducts/${id}`);
  }

  async function deleteData(id) {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      getproducts();
    } catch (err) {}
  }

  function updateProduct(id) {
    navigateToOtherComponent(`/updateproduct/${id}`);
  }
  return (
    <div className={AllproductsStyles.cardcontainer}>
      {products.map(({ id, product, price }, index) => {
        return (
          <div key={id} className={AllproductsStyles.card}>
            <h2>{index + 1}.</h2>
            <h3>Product: {product}</h3>
            <h3>Price: {price}$</h3>
            <button
              className={AllproductsStyles.view}
              onClick={() => {
                viewData(id);
              }}
            >
              View
            </button>
            <button
              className={AllproductsStyles.delete}
              onClick={() => {
                deleteData(id);
              }}
            >
              Delete
            </button>
            <button
              className={AllproductsStyles.update}
              onClick={() => {
                updateProduct(id);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
