import { useSelector } from 'react-redux';
import '../../Assets/CSS/Dashboard-CSS/WidgetSm.css';
import { Visibility } from '@mui/icons-material';

const UserWidgetSm = () => {
  const products = useSelector((state) => state.products.products.slice(-5));
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Products</span>
      <ul className="widgetSmList">
        {products.map((product) => (
          <li key={product._id} className="widgetSmListItem">
            <img src={product.img} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{product.title}</span>
              <span className="widgetSmUserTitle">Gucci</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserWidgetSm;
