import React, { useEffect, useState } from "react";
import AddproductsStyle from "../css/addproducts.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
  // hooks
  let [fdata, setfdata] = useState({
    product: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    country: "",
  });
  let { pid } = useParams();
  let navigateToAllProducts = useNavigate();

  // get individual product data from api
  async function getProductData() {
    try {
      let { data } = await axios.get(`http://localhost:3000/products/${pid}`);
      setfdata(data);
      console.log(data);
    } catch (err) {}
  }

  // get data from form fields
  function getFormData({ target: { name, value } }) {
    setfdata({ ...fdata, [name]: value });
  }

  useEffect(() => {
    getProductData();
  }, []);

  // on submit it will send data to server and update
  async function updateProductonSubmit(e) {
    e.preventDefault();

    if (Object.values(fdata).every((ele) => ele !== "")) {
      let addproduct = await axios.put(
        `http://localhost:3000/products/${pid}`,
        fdata
      );
      navigateToAllProducts("/allproducts");
      console.log("data sent");
    } else {
      console.log("data not sent");
    }
  }
  return (
    <div className={AddproductsStyle.container}>
      <h1>Update Your Product</h1>

      <form onSubmit={updateProductonSubmit}>
        <div>
          <h3>Product Name:</h3>
          <input
            type="text"
            placeholder="Product name"
            name="product"
            onChange={getFormData}
            value={fdata.product}
          />
        </div>
        <div>
          <h3>Category:</h3>
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={getFormData}
            value={fdata.category}
          />
        </div>
        <div>
          <h3>Brand:</h3>
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={getFormData}
            value={fdata.brand}
          />
        </div>
        <div>
          <h3>Price:</h3>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={getFormData}
            value={fdata.price}
          />
        </div>
        <div>
          <h3>Quantity:</h3>
          <input
            type="text"
            placeholder="Quantity"
            name="quantity"
            onChange={getFormData}
            value={fdata.quantity}
          />
        </div>
        <div>
          <h3>Country:</h3>
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={getFormData}
            value={fdata.country}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
