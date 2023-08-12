import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);

  const location = useLocation();
  // console.log(location);

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
