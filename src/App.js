import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import AddProducts from "./components/AddProducts";
import ViewProducts from "./components/ViewProducts";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar
        data={[
          { key: "Home", url: "/" },
          { key: "All Products", url: "/allproducts" },
          { key: "Add products ", url: "/addproducts" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allproducts/:pid" element={<ViewProducts />} />
        <Route path="/updateproduct/:pid" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
