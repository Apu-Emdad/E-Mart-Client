import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import "../Assets/CSS/Cart.css";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== React Stripe imports ====- */
import StripeCheckout from "react-stripe-checkout";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { resetCart } from "../Redux/Slices/cartSlice";
const KEY = import.meta.env.VITE_STRIPE;

const Cart = () => {
  const cursorPointer = {
    cursor: "pointer",
  };

  /* ==== declaring stripe constants ==== */
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.user?.currentUser._id);
  const userName = useSelector((state) => state.user.currentUser.username);
  // console.log(userId);
  const [stripeToken, setStripeToken] = useState("null");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const subTotal = cart.total;
  const shippingCharge = subTotal * (10 / 100);
  const discount = subTotal * (5 / 100);
  const total = subTotal + shippingCharge - discount;

  const onToken = (token) => {
    setStripeToken(token);
    // console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const order = {
          userId: userId,
          userName: userName,
          products: cart.products,
          total: cart.total,
          totalOrders: cart.totalOrders,
        };

        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });

        const sendToDB = await userRequest.post(`/orders/${userId}`, order);
        console.log(sendToDB.data);

        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
            orderId: sendToDB.data._id,
          },
        });
        return;
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [navigate, cart, stripeToken, userId, userName]);

  const handleCartReset = () => {
    dispatch(resetCart());
  };

  return (
    <div>
      <Header />
      <div className="cart">
        <h1 className="cart-title">My Cart</h1>
        {/* ==== cart top starts ==== */}
        <div className="cart-top">
          <button className="cart-topButton" onClick={handleCartReset}>
            Reset Cart
          </button>
          <div className="cart-topTexts">
            <span className="cart-topText">
              My Cart({cart.products.length})
            </span>
            <span className="cart-topText">My Wishlist(0)</span>
          </div>

          <StripeCheckout
            name="E-MART"
            image="https://i.ibb.co/r6yv10S/Logo.jpg"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button className="cart-topButton cart-filledButton">
              Checkout Now
            </button>
          </StripeCheckout>
        </div>
        {/* ==== cart top ends ==== */}

        {/* ==== cart bottom starts ==== */}
        <div className="cart-bottom">
          {/*==== cart-info starts ====+ */}
          <div className="cart-info">
            {/*==== cart-info> cart-product starts ====+ */}
            {cart.products.map((product) => (
              <div key={product.orderId} className="cart-product">
                <div className="cart-productDetail">
                  <img src={product.img} alt="" />
                  <div className="cart-details">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>Order ID: </b>
                      {product?.orderId}
                    </span>
                    <div
                      className="singleProduct-filter-color"
                      style={{ background: product.color, cursor: "default" }}
                    ></div>
                    <span>
                      <b>Size: </b>
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className="cart-priceDetail">
                  <div className="cart-productAmmountContainer">
                    <Add style={cursorPointer} />
                    <div className="cart-proudctAmmount">
                      {product.productQuantity}
                    </div>
                    <Remove style={cursorPointer} />
                  </div>
                  <div className="cart-productPrice"> $ {product.subtotal}</div>
                </div>
              </div>
            ))}

            <hr />

            {/*==== cart-info> cart-product ends ====+ */}
          </div>
          {/* ==== Cart-info ends ==== */}
          {/* === Cart summary starts ==== */}
          <div className="cart-summary">
            <h1 className="cart-summaryTitle">Order Summary</h1>
            <div className="cart-summaryItem">
              <span>Subtotal</span>
              <span>$ {subTotal}</span>
            </div>
            <div className="cart-summaryItem">
              <span>Shipping Charge</span>
              <span>$ {shippingCharge}</span>
            </div>
            <div className="cart-summaryItem">
              <span>Discount</span>
              <span>$ -{discount}</span>
            </div>
            <div className="cart-summaryItem cart-summaryTotal">
              <span>Total</span>
              <span>$ {total}</span>
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
