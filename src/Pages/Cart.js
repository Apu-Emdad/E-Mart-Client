import { Add, Remove } from "@material-ui/icons";
import React from "react";
import "../Assets/CSS/Cart.css";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
const Cart = () => {
  const cursorPointer = {
    cursor: "pointer",
  };
  return (
    <div>
      <Header />
      <div className="cart">
        <h1 className="cart-title">My Cart</h1>
        {/* ==== cart top starts ==== */}
        <div className="cart-top">
          <button className="cart-topButton">Continue Shopping</button>
          <div className="cart-topTexts">
            <span className="cart-topText">My Cart(2)</span>
            <span className="cart-topText">My Wishlist(0)</span>
          </div>
          <button className="cart-topButton cart-filledButton">
            Checkout Now
          </button>
        </div>
        {/* ==== cart top ends ==== */}

        {/* ==== cart bottom starts ==== */}
        <div className="cart-bottom">
          {/*==== cart-info starts ====+ */}
          <div className="cart-info">
            {/*==== cart-info> cart-product starts ====+ */}

            <div className="cart-product">
              <div className="cart-productDetail">
                <img src="https://i.ibb.co/KwHzshz/product6.png" alt="" />
                <div className="cart-details">
                  <span>
                    <b>Product:</b> Premium Winter Jacket{" "}
                  </span>
                  <span>
                    <b>ID:</b> 979795487
                  </span>
                  <div
                    className="singleProduct-filter-color"
                    style={{ background: "black", cursor: "default" }}
                  ></div>
                  <span>
                    <b>Size:</b> 38
                  </span>
                </div>
              </div>
              <div className="cart-priceDetail">
                <div className="cart-productAmmountContainer">
                  <Add style={cursorPointer} />
                  <div className="cart-proudctAmmount">2</div>
                  <Remove style={cursorPointer} />
                </div>
                <div className="cart-productPrice"> $ 30</div>
              </div>
            </div>
            <hr />

            {/*==== cart-info> cart-product ends ====+ */}
          </div>
          {/* ==== Cart-info ends ==== */}
          {/* === Cart summary starts ==== */}
          <div className="cart-summary">
            <h1 className="cart-summaryTitle">Order Summary</h1>
            <div className="cart-summaryItem">
              <span>Subtotal</span>
              <span>$ 80</span>
            </div>
            <div className="cart-summaryItem">
              <span>Shipping Charge</span>
              <span>$ 5.90</span>
            </div>
            <div className="cart-summaryItem">
              <span>Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="cart-summaryItem cart-summaryTotal">
              <span>Total</span>
              <span>$ 80</span>
            </div>
          </div>
          {/* === Cart summary ends ==== */}
        </div>

        {/* ==== cart bottom ends ==== */}
      </div>
      <NewsLetter />
    </div>
  );
};

export default Cart;
