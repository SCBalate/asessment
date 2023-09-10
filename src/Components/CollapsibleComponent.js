import React from "react";
import Folder from "./Folder";
import "../App.css";
import { useSidebar } from "../SidebarContext";

function CollapsibleComponent() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={`sidebar ${
        isSidebarOpen
          ? "sidebar w-100 vh-100 bg-white"
          : "sidebar  vh-100 w-100 bg-white "
      }`}
    >
      <div
        className="d-flex ps-3 pe-2 py-3 align-items-center "
        style={{ background: "#F8FAFD" }}
      >
        <div
          class="me-auto fw-bolder"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          Transaction Contents
        </div>
        <div class="px-2 py-1 bg-white" onClick={toggleSidebar}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>arrow-left</title>
            <path d="M16.335 11.363h-7.132l2.524-2.527c0.115-0.115 0.186-0.275 0.186-0.451s-0.071-0.335-0.186-0.451l0 0c-0.117-0.112-0.276-0.181-0.451-0.181s-0.334 0.069-0.451 0.181l0-0-3.611 3.615c-0.115 0.115-0.187 0.275-0.187 0.451s0.071 0.335 0.187 0.451l3.613 3.613c0.117 0.112 0.276 0.181 0.451 0.181s0.334-0.069 0.451-0.181l-0 0c0.115-0.115 0.187-0.274 0.187-0.45s-0.071-0.335-0.187-0.45l-2.529-2.527h7.135c0.352 0 0.637-0.285 0.637-0.637s-0.285-0.637-0.637-0.637v0z"></path>
          </svg>
        </div>
      </div>

      <div
        class="d-flex align-items-center justify-content-evenly py-2"
        style={{ display: isSidebarOpen ? "block" : "none" }}
      >
        <div
          class="border-end border-secondary-subtle px-3"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <h4 class="mb-0">12</h4>
          <span class="text-muted fs-12">Stages</span>
        </div>
        <div
          class="border-end border-secondary-subtle px-3"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <h4 class="mb-0">23</h4>
          <span class="text-muted fs-12">Subfolder</span>
        </div>
        <div
          class="border-end border-secondary-subtle px-3"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <h4 class="mb-0">1235</h4>
          <span class="text-muted fs-12">Documents</span>
        </div>
        <div style={{ display: isSidebarOpen ? "block" : "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="11.388"
            viewBox="0 0 18 11.388"
          >
            <g
              id="Group_43479"
              data-name="Group 43479"
              transform="translate(-219.721 -550.76)"
            >
              <path
                id="Path_44741"
                data-name="Path 44741"
                d="M234.844,555.658H222.6a.8.8,0,1,0,0,1.592h12.246a.8.8,0,1,0,0-1.592Z"
                fill="#06090f"
              />
              <path
                id="Path_44742"
                data-name="Path 44742"
                d="M232.269,560.557h-7.1a.8.8,0,0,0,0,1.591h7.1a.8.8,0,1,0,0-1.591Z"
                fill="#06090f"
              />
              <path
                id="Path_44743"
                data-name="Path 44743"
                d="M236.925,550.76H220.516a.8.8,0,0,0,0,1.591h16.409a.8.8,0,1,0,0-1.591Z"
                fill="#06090f"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        class="d-flex py-3 border-top border-bottom ps-3 mb-4"
        style={{ display: isSidebarOpen ? "block" : "none" }}
      >
        <div
          class="me-auto text-muted"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          Filter by Client/Matter name
        </div>
        <div
          class="pe-2 opacity-25"
          style={{ display: isSidebarOpen ? "block" : "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="11.388"
            viewBox="0 0 18 11.388"
          >
            <g
              id="Group_43479"
              data-name="Group 43479"
              transform="translate(-219.721 -550.76)"
            >
              <path
                id="Path_44741"
                data-name="Path 44741"
                d="M234.844,555.658H222.6a.8.8,0,1,0,0,1.592h12.246a.8.8,0,1,0,0-1.592Z"
                fill="#06090f"
              />
              <path
                id="Path_44742"
                data-name="Path 44742"
                d="M232.269,560.557h-7.1a.8.8,0,0,0,0,1.591h7.1a.8.8,0,1,0,0-1.591Z"
                fill="#06090f"
              />
              <path
                id="Path_44743"
                data-name="Path 44743"
                d="M236.925,550.76H220.516a.8.8,0,0,0,0,1.591h16.409a.8.8,0,1,0,0-1.591Z"
                fill="#06090f"
              />
            </g>
          </svg>
        </div>
      </div>
      <Folder></Folder>
    </div>
  );
}

export default CollapsibleComponent;
