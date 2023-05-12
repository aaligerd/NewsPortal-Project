const express = require("express");
const route = express.Router();
const {
  registerAdmin,
  adminLogin,
  adminUpdate,
  clearAllCookies,
  adminLogout,
} = require("../controller/adminController");

//register new admin
route.post("/register", registerAdmin);

//admin login
route.post("/login", adminLogin);

//admin logout
route.get("/logout", adminLogout);

//admin update
route.put("/update/:id", adminUpdate);

//clear all cookie (for dev perpouse only)
route.delete("/clearcookie", clearAllCookies);

module.exports = route;
