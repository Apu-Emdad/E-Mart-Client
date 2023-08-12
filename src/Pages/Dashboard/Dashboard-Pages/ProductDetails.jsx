import React, { useState } from "react";
import "../../../Assets/CSS/Dashboard-CSS/ProductDetails.css";
import Chart from "../../../Components/Dashboard-Components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../Redux/apiCalls.js";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product._id === productId);

  const [title, setTitle] = useState(product?.title);
  const [desc, setDesc] = useState(product?.desc);
  const [price, setPrice] = useState(product?.price);
  const [inStock, setInStock] = useState(product?.inStock);

  const handleName = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleStock = (e) => {
    setInStock(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const productUpdate = { ...product, title, desc, price, inStock };
    updateProduct(product._id, productUpdate, dispatch);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="../newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product?.title}
              onChange={handleName}
            />
            <label>Product Description</label>
            <textarea
              style={{ height: "100px" }}
              type="text"
              placeholder={product?.desc}
              onChange={handleDesc}
            />
            <label>Price</label>
            <input
              type="number"
              placeholder={product?.price}
              onChange={handlePrice}
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleStock}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product?.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={(e) => handleUpdate(e)}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
