import React, { useState, useEffect } from "react";
import { useTableData } from "../TableDataContext";

const TreeTable = () => {
  const { tableData, expandedRows, toggleRow, searchQuery } = useTableData();

  // Initialize filteredData with tableData when searchQuery is empty
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(tableData);
    } else {
      // Otherwise, filter the data based on the search query
      const filtered = tableData.filter((item) =>
        item.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [tableData, searchQuery]);

  const tableHeaders = [
    { id: 1, label: "#", width: "20" },
    { id: 2, label: "Phase", width: "30" },
    { id: 3, label: "Status", width: "30" },
    { id: 4, label: "Document", width: "20" },
    { id: 5, label: "Responsive Party", width: "40" },
    { id: 6, label: "Update Date", width: "30" },
  ];

  function generateRows(dataArray) {
    return (
      <>
        {dataArray.map((rowData) => (
          <React.Fragment key={rowData.id}>
            <tr
              onClick={() => toggleRow(rowData.id)}
              className={`bg-white border-bottom text-center ${
                expandedRows[rowData.id] ? "active" : ""
              }`}
              height={"70px"}
            >
              <td>{rowData.id}</td>
              <td>
                <div className="fw-bold">{rowData?.valueForTable}</div>
                <div className="tableSubTextColor fs-11 ">
                  {rowData?.subPhaseString}
                </div>
              </td>
              <td>
                <div className="opacity-50">
                  <button className={rowData.btnColor}>
                    <span className="px-4 py-1">{rowData?.status}</span>
                  </button>
                </div>
              </td>
              <td>
                <img src={rowData?.document} alt={``} />
              </td>
              <td className="fs-12 responseLightGrey text-dark badge py-2 rounded px-3 text-center mt-4">
                {rowData?.responsibleParty}
              </td>
              <td>{rowData?.updatedDate}</td>
            </tr>
            {expandedRows[rowData.id] && (
              <React.Fragment key={`child-${rowData.id}`}>
                {generateRows(rowData.children)}
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }

  return (
    <div
      className="bg-grey container-fluid ps-4"
      style={{ paddingRight: "29px" }}
    >
      <table className="w-100">
        <thead style={{ height: "60px" }}>
          <tr className="text-center my-auto">
            {tableHeaders.map((header) => (
              <th key={header.id} width={header.width} className="bold">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody id="tableBody">{generateRows(filteredData)}</tbody>
      </table>
    </div>
  );
};

export default TreeTable;
