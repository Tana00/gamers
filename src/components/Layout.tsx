import { FC, ReactNode } from "react";
import { Topbar, Sidebar } from "../components";

interface ILayoutInterface {
  children: ReactNode;
}

export const Layout: FC<ILayoutInterface> = ({ children }) => {
  return (
    <div className="md:flex items-start justify-start">
      <div className="">
        <Sidebar />
      </div>

      <div className="w-full m-10">
        <Topbar />
        {children}
      </div>
    </div>
  );
};
