import { Icon } from "@iconify/react";
import { SidebarMenu } from "../utils";
import { SidebarMenuInterface } from "../interface";

export const Sidebar = () => {
  const openSidebar = () => {};
  return (
    <div className="md:w-72 w-full">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={openSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] mx-auto overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 py-6 mt-1 flex items-center justify-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              REAL GAMERS
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        {SidebarMenu?.map((item: SidebarMenuInterface) => (
          <div className="p-2.5 mt-3 flex flex-col items-center justify-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <Icon icon={item?.icon} width="50" />
            <span className="text-[11px] text-gray-200 font-bold">
              {item?.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
