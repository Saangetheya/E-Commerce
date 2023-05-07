import React, { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";

const AdminSidebar = (props) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Fragment>
      <div
        style={{ boxShadow: "1px 1px 8px 0.2px #aaaaaa" }}
        id="sidebar"
        className="hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-gray-600"
      >
        <div
          onClick={(e) => history.push("/admin/dashboard")}
          className={`${
            location.pathname === "/admin/dashboard"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-black cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            
          </span>
          <span className="hover:text-gray-200">GEN INFO</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/categories")}
          className={`${
            location.pathname === "/admin/dashboard/categories"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-black cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
          </span>
          <span className="hover:text-white">GROUPS</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/products")}
          className={`${
            location.pathname === "/admin/dashboard/products"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-black cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
          </span>
          <span className="hover:text-white">PRODUCTS</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/orders")}
          className={`${
            location.pathname === "/admin/dashboard/orders"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-black cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
          </span>
          <span className="hover:text-white">ORDER_LIST</span>
        </div>
        <hr className="border-b border-gray-200" />
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
