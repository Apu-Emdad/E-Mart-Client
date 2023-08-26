import { useSelector } from 'react-redux';
import '../../Assets/CSS/Dashboard-CSS/WidgetLg.css';

const UserWidgetLg = () => {
  const products = useSelector((state) => state.products.products.slice(0, 4));
  console.log('products:', products);

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={product.img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{product.title}</span>
              </td>
              <td className="widgetLgDate">2 Dec 2022</td>
              <td className="widgetLgAmount">${product.price}</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserWidgetLg;
