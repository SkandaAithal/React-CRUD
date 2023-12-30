import React, { useState } from "react";
import AddproductsStyle from "../css/addproducts.module.css";
import axios from "axios";
const AddProducts = () => {
  let [fdata, setfdata] = useState({
    product: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    country: "",
  });

  function getData({ target: { name, value } }) {
    setfdata({ ...fdata, [name]: value });
  }

  async function submitData(e) {
    e.preventDefault();
    console.log(Object.values(fdata).every((ele) => ele !== ""));
    if (Object.values(fdata).every((ele) => ele !== "")) {
      let addproduct = await axios.post(
        "http://localhost:3000/products",
        fdata
      );
      setfdata({
        product: "",
        category: "",
        brand: "",
        price: "",
        quantity: "",
        country: "",
      });
      console.log("data sent");
    } else {
      console.log("data not sent");
    }
  }
  return (
    <div className={AddproductsStyle.container}>
      <h1>Add Your Product</h1>

      <form onSubmit={submitData}>
        <div>
          <h3>Product Name:</h3>
          <input
            type="text"
            placeholder="Product name"
            name="product"
            onChange={getData}
            value={fdata.product}
          />
        </div>
        <div>
          <h3>Category:</h3>
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={getData}
            value={fdata.category}
          />
        </div>
        <div>
          <h3>Brand:</h3>
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={getData}
            value={fdata.brand}
          />
        </div>
        <div>
          <h3>Price:</h3>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={getData}
            value={fdata.price}
          />
        </div>
        <div>
          <h3>Quantity:</h3>
          <input
            type="text"
            placeholder="Quantity"
            name="quantity"
            onChange={getData}
            value={fdata.quantity}
          />
        </div>
        <div>
          <h3>Country:</h3>
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={getData}
            value={fdata.country}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;
