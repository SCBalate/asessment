import React, { createContext, useContext, useState, useEffect } from "react";

const TableDataContext = createContext();

export const useTableData = () => {
  return useContext(TableDataContext);
};

export const TableDataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRow = (id) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/folders");
        const data = await res.json();
        setTableData(data || []);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const value = {
    tableData,
    expandedRows,
    toggleRow,
    searchQuery,
    setSearchQuery,
  };

  return (
    <TableDataContext.Provider value={value}>
      {children}
    </TableDataContext.Provider>
  );
};
