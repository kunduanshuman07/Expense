import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { myexpenseData } from "../data/myexpense";
import Wrapper from "../assets/wrappers/Myexpense";
const Myexpense = () => {
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    {
      field: "id",
      headerName: "Expense_id",
      headerClassName: "super-app-theme--header",
      width: 170,
    },
    { field: "code", headerName: "Emp_Id", width: 200 },
    {
      field: "purpose",
      headerName: "Purpose",
      width: 100,
      editable: true,
    },
    { field: "category", headerName: "Category" },
    { field: "amount", headerName: "Amount" },
    { field: "date", headerName: "Date" },
    { field: "attachment", headerName: "Attachment" },
    { field: "status", headerName: "Status" },
  ];
  return (
    <Wrapper>
      <div className="container">
        <header></header>
        <div className="table-container">
          <DataGrid
            rows={myexpenseData}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[5, 10, 20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            checkboxSelection
            disableRowSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Myexpense;
