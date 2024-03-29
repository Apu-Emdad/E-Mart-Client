import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../Assets/CSS/Success.css';
import { resetCart } from '../Redux/Slices/cartSlice';
const Success = () => {
  const location = useLocation();
  const data = location.state?.stripeData;
  const cart = location.state?.cart;
  const orderId = location.state?.orderId;
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  dispatch(resetCart());

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/home">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
