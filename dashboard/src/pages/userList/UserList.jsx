import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import {userRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data,setData] =useState(userRows)
  const handleDelete= (id)=>{
    setData(data.filter(items=> items.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",

      width: 200,
    },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/user/"+ params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  
  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
        disableRowSelectionOnClick
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
