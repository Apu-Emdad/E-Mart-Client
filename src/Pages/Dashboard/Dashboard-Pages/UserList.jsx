import { useEffect, useState } from 'react';
import '../../../Assets/CSS/Dashboard-CSS/UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { userRequest } from '../../../requestMethods';
import { IconButton } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    console.log('id:', id);
    // setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get(`/users`);
        setUsers(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getUsers();
  }, []);

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://i.ibb.co/sRr8kWj/avatar.png"
              alt=""
            />
            {params.row.username}
          </div>
        );
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: () => {
        return 'active';
      }
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
      renderCell: () => {
        return 'Currently Unavailable';
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'../user/' + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <IconButton>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </IconButton>
          </>
        );
      }
    }
  ];

  return (
    <div className="userList">
      {users.length > 0 && (
        <DataGrid
          rows={users}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(row) => row?._id}
        />
      )}
    </div>
  );
};

export default UserList;
