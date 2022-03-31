import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import MentiItems from "./ui/menuItems";
import { useStore } from "../../infra/store/index";
import "../../index.css";

export default function HomePage() {
  const items = [
    { title: "Nationality", router: "./nationality" },
    { title: "Country", router: "./Country" },
    { title: "City", router: "./City" },
  ];

  const store = useStore();
  const data = [
    { id: 1, nat_name: " Egypt" },
    { id: 2, nat_name: " Saudi Arabia" },
    { id: 3, nat_name: "India" },
    { id: 4, nat_name: " Pakistan" },
    { id: 5, nat_name: " Egypt" },
    { id: 6, nat_name: " Saudi Arabia" },
    { id: 7, nat_name: "India" },
    { id: 8, nat_name: " Pakistan" },
    { id: 9, nat_name: " Egypt" },
    { id: 10, nat_name: " Saudi Arabia" },
    { id: 11, nat_name: "India" },
    { id: 12, nat_name: " Pakistan" },
    { id: 13, nat_name: " Egypt" },
    { id: 14, nat_name: " Saudi Arabia" },
    { id: 15, nat_name: "India" },
    { id: 16, nat_name: " Pakistan" },
    { id: 17, nat_name: " Egypt" },
    { id: 18, nat_name: " Saudi Arabia" },
    { id: 19, nat_name: "India" },
    { id: 20, nat_name: " Pakistan" },
    { id: 21, nat_name: " Egypt" },
    { id: 22, nat_name: " Saudi Arabia" },
    { id: 23, nat_name: "India" },
    { id: 24, nat_name: " Pakistan" },
    { id: 25, nat_name: " Egypt" },
    { id: 26, nat_name: " Saudi Arabia" },
    { id: 27, nat_name: "India" },
    { id: 28, nat_name: " Pakistan" },
    { id: 29, nat_name: " Egypt" },
    { id: 30, nat_name: " Saudi Arabia" },
    { id: 31, nat_name: "India" },
    { id: 32, nat_name: " Pakistan" },
    { id: 33, nat_name: " Egypt" },
    { id: 34, nat_name: " Saudi Arabia" },
    { id: 35, nat_name: "India" },
    { id: 36, nat_name: " Pakistan" },
  ];

  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    store.setData(data);
  }, []);

  const columns = [
    { field: "id", headerName: "Code" },
    { field: "nat_name", headerName: "Nationality" },
  ];

  const stylee = [
    "w-5/6",
    "p-4",
    "overflow-auto",
    "border",
    "border-gray-100",
    "px-3",
    "flex",
    "flex-col",

    "gap-3",
  ];

  return (
    <div className="flex-col flex items-stretch ">
      <div className="h-[50px] bg-[#323232] flex items-center p-3 ">
        <p className=" text-white text-xl "> Prefernces </p>
      </div>

      <div className="  p-4 bg-gray-100  ">
        <div className="pt-5 border border-gray-200 bg-gray-50  flex rounded-lg  shadow-lg shadow-slate-600 h-[900px]">
          <div className=" w-1/6 overflow-auto border border-gray-100 ">
            <MentiItems items={items} />
          </div>

          <div className={stylee.join(" ")}>
            <form className="flex flex-col flex-wrap  gap-3 w-1/2">
              <label htmlFor="nat_name">
                {" "}
                Nationality<span className="text-red-500"> * </span>{" "}
              </label>
              <input
                type="input"
                className="form-input rounded"
                name="nat_name"
                id="nat_name"
                placeholder="Enter Nationality"
                value=" "
              />

              <button
                className="w-1/4 bg-zinc-800 text-white py-2 self-end"
                onSubmit={() => {}}
              >
                {" "}
                Submit{" "}
              </button>
            </form>
            <div className="border border-gray-500 ">
              <div className="py-3 pl-2">
                <input
                  type="text"
                  id="search"
                  name="search"
                  className=""
                  placeholder="Search"
                />
              </div>
              <div className=" ">
                <DataGrid
                  autoHeight
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  rowsPerPageOptions={[10, 20, 50]}
                  pagination
                  rows={store.data}
                  columns={columns}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
