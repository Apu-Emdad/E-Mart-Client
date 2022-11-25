import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../Assets/CSS/SingleProduct.css";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import { addProduct } from "../Redux/Slices/cartSlice";
import { publicRequest } from "../requestMethods";
import ObjectID from "bson-objectid";
const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [colorAlert, setColorAlert] = useState(false);
  const [sizeAlert, setSizeAlert] = useState(false);
  const dispatch = useDispatch();

  /* ==== Getting single product ==== */
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        setProduct(res.data);
      } catch {}
    };

    getProduct();
  }, [productId]);

  /* ==== Handling the product quantitiy ==== */
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  /* ==== Handling the product color ==== */
  const handleColor = (c) => {
    if (c !== color) {
      setColor(c);
      setColorAlert(false);
    } else {
      setColor("");
    }
  };

  /* ==== Handling the product size ==== */
  const handleSize = (e) => {
    setSize(e.target.value);
    setSizeAlert(false);
  };

  /* ==== Handling the cart with Redux Toolkit ====  */
  const handleCart = () => {
    if (!color) {
      alert("please select color");
      setColorAlert(true);
      return;
    } else {
      setColorAlert(false);
    }

    if (!size) {
      alert("please select size");
      setSizeAlert(true);
      return;
    } else {
      setSizeAlert(false);
    }

    /*==== update cart ===== */
    dispatch(
      addProduct({
        ...product,
        productQuantity: quantity,
        color,
        size,
        subtotal: product.price * quantity,
        orderId: ObjectID(),
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="singleProduct-container">
        <div className="singleProduct-image">
          <img src={product.img} alt="" className="img-fluid" />
        </div>
        <div className="singleProduct-info">
          <h1 className="singleProduct-title">{product.title}</h1>

          <p className="singleProduct-description">{product.desc}</p>

          {/* ==== Price ==== */}
          <span className="singleProduct-price">$ {product.price}</span>

          {/* === Filter ==== */}
          <div className="singleProduct-filter-container">
            {/* ==== Filter Color ==== */}
            <div className="singleProduct-filter">
              <span className="singleProduct-filter-title">Color</span>

              {product.color?.map(
                (c) =>
                  c !== "All" && (
                    <div
                      key={c}
                      style={{ backgroundColor: c }}
                      onClick={() => handleColor(c)}
                      className={
                        color === c
                          ? "singleProduct-filter-color singleProduct-filter-color-selected "
                          : "singleProduct-filter-color "
                      }
                    />
                  )
              )}

              <br />
              {colorAlert ? (
                <p className="singleProduct-filter-message">
                  Please select color
                </p>
              ) : (
                <p></p>
              )}
            </div>
            {/* ==== Filter Size ==== */}
            <div className="singleProduct-filter">
              <span className="singleProduct-filter-title">Size</span>

              <select
                className="singleProduct-filter-size"
                onChange={(e) => handleSize(e)}
              >
                <option className="singleProduct-filter-size-option" value="">
                  Select
                </option>
                {product.size?.map(
                  (s) =>
                    s !== "ALL" && (
                      <option
                        className="singleProduct-filter-size-option"
                        key={s}
                      >
                        {s}
                      </option>
                    )
                )}
              </select>
              {sizeAlert ? (
                <p className="singleProduct-filter-message">
                  Please select size
                </p>
              ) : (
                <p
                  className="singleProduct-filter-message"
                  style={{ visibility: "hidden" }}
                >
                  This section is hidden
                </p>
              )}
            </div>
          </div>

          {/* ==== Amount  ==== */}
          <div className="singleProduct-add-container">
            <div className="singleProduct-amount-container">
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              />
              <span className="singleProduct-amount">{quantity}</span>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <button onClick={handleCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default SingleProduct;
