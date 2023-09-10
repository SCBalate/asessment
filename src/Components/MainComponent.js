import React from "react";
import SidenavLeftComponent from "./SidenavLeftComponent";
import CollapsibleComponent from "./CollapsibleComponent";
import BreadcrumbComponent from "./BreadcrumbComponent";
import TreeTable from "./MainPageComponent";
import TopFilterComponent from "./TopFilterComponent";
import SidenavRightComponent from "./SidenavRightComponent";
import { useSidebar } from "../SidebarContext";

const MainComponent = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div>
      <div className="row">
        <div className="col-md-1 ">
          <SidenavLeftComponent />
        </div>
        <div
          className={` ${isSidebarOpen ? "col-md-3 px-0" : "col-md-1 px-0 "}`}
          style={{ zIndex: "100" }}
        >
          <CollapsibleComponent />
        </div>
        <div className={` ${isSidebarOpen ? "col-md-8 " : "col-md-10 "}`}>
          <BreadcrumbComponent />
          <div className="row bg-grey">
            <TopFilterComponent />
            <div className="col-md-11 px-0">
              <TreeTable />
            </div>
            <div
              className="col-md-1"
              style={{
                position: "relative",
                top: "-37px",
                background: "white",
                borderRadius: "7px",
                left: "-12px",
              }}
            >
              <SidenavRightComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
