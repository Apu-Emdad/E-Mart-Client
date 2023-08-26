import { useSelector } from 'react-redux';
import '../../../Assets/CSS/Dashboard-CSS/DashboardHome.css';
import Chart from '../../../Components/Dashboard-Components/Chart';
import FeaturedInfo from '../../../Components/Dashboard-Components/FeaturedInfo';
import UserWidgetLg from '../../../Components/Dashboard-Components/UserWidgetLg';
import UserWidgetSm from '../../../Components/Dashboard-Components/UserWidgetSm';
import WidgetLg from '../../../Components/Dashboard-Components/WidgetLg';
import WidgetSm from '../../../Components/Dashboard-Components/WidgetSm';
import { userData } from '../dummyData';

const DashboardHome = () => {
  const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        {isAdmin ? <WidgetSm /> : <UserWidgetSm />}
        {isAdmin ? <WidgetLg /> : <UserWidgetLg />}
      </div>
    </div>
  );
};

export default DashboardHome;
