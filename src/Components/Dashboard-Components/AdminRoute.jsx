import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const isAdmin = user?.isAdmin;

  const location = useLocation();
  // console.log(location);

  if (isAdmin) {
    return children;
  }
  return (
    <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
  );
};

export default AdminRoute;
