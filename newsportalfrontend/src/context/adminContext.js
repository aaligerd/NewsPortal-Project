import React, { createContext, useState } from "react";
export const AdminContext = createContext();
export const AdminPovider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const getAdminData = (data) => {
    setAdminData(data);
  };
  const [tabName, setTabName] = useState("Home");
  return (
    <AdminContext.Provider
      value={{ adminData, setAdminData, tabName, setTabName, getAdminData }}
    >
      {children}
    </AdminContext.Provider>
  );
};
