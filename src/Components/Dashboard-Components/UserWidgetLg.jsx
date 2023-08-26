import '../../Assets/CSS/Dashboard-CSS/WidgetLg.css';

const UserWidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/KwHzshz/product6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Green T-Shirt</span>
          </td>
          <td className="widgetLgDate">2 Dec 2022</td>
          <td className="widgetLgAmount">$974.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/KwHzshz/product6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">White Shirt</span>
          </td>
          <td className="widgetLgDate">2 Dec 2022</td>
          <td className="widgetLgAmount">$974.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/KwHzshz/product6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Men&apos;s Suit</span>
          </td>
          <td className="widgetLgDate">2 Dec 2022</td>
          <td className="widgetLgAmount">$974.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/KwHzshz/product6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Formal Shirt</span>
          </td>
          <td className="widgetLgDate">2 Dec 2022</td>
          <td className="widgetLgAmount">$974.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserWidgetLg;
