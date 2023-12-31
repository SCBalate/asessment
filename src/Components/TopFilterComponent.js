import React, { useState, useEffect } from "react";
import "../App.css";
import { useTableData } from "../TableDataContext";

const TopFilterComponent = ({ onFilterChange }) => {
  const { searchQuery, setSearchQuery } = useTableData(); // Access the search query and setter from the context
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    setSearchQuery(inputValue);
  }, [inputValue, setSearchQuery]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
  };

  return (
    <div className="bg-grey ps-4">
      <div class="d-flex py-4 fs-12 align-items-center pb-0">
        <div class="d-flex align-items-center justify-content-between bg-white ">
          <div class="border-end py-2 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.278"
              height="16.049"
              viewBox="0 0 19.278 16.049"
            >
              <path
                id="Path_44444"
                data-name="Path 44444"
                stroke="#C0CEDE"
                d="M432.973,566.988a2.468,2.468,0,0,0-2.4-1.9l-.114,0c-1.048,0-2.111,0-3.141,0h-1.624a2.485,2.485,0,0,1-1.781-.755l-.33-.331c-.182-.185-.371-.375-.559-.558a2.552,2.552,0,0,0-1.8-.8c-1.577-.007-3.153-.008-4.681,0a2.312,2.312,0,0,0-1.512.6,2.7,2.7,0,0,0-.834,2.547.972.972,0,0,1,.038.27,1.189,1.189,0,0,1-.138.323,2.407,2.407,0,0,0-.308,1.436c.049.531.1,1.06.152,1.589.071.739.145,1.5.214,2.254q.095,1.065.186,2.129c.07.824.145,1.677.221,2.515l0,.039a2.548,2.548,0,0,0,2.533,2.341c.069,0,.14,0,.209-.008h6.036v-.026l0-.006v.025l2.088,0c1.368,0,2.783,0,4.173,0,.054,0,.108.005.162.005a2.49,2.49,0,0,0,2.315-1.571,5.347,5.347,0,0,0,.26-1.684c.07-.7.133-1.412.194-2.1q.049-.549.1-1.1c.129-1.38.265-2.869.418-4.552A2.023,2.023,0,0,0,432.973,566.988Zm-2.548-.613a1.292,1.292,0,0,1,.4.031,1.258,1.258,0,0,1,.924,1.519c-.083.711-.144,1.437-.2,2.139-.026.313-.052.624-.08.937q-.069.758-.136,1.516c-.107,1.212-.218,2.466-.337,3.7a1.3,1.3,0,0,1-1.294,1.17H417.119a.385.385,0,0,1-.048,0,1.241,1.241,0,0,1-1.239-1.243c-.144-1.605-.3-3.237-.44-4.816l-.135-1.459c-.018-.207-.038-.414-.057-.62-.048-.511-.1-1.038-.137-1.558a1.131,1.131,0,0,1,0-.184,1.234,1.234,0,0,1,1.227-1.143.893.893,0,0,1,.09,0h7.069v-.025h0v.031Zm-9.133-1.293c-.86,0-1.746-.007-2.617.008a16.136,16.136,0,0,0-3.122.11c-.046.01-.076.007-.092-.008s-.018-.077-.013-.126c0-.021,0-.041,0-.056a1.18,1.18,0,0,1,1.086-1.085c.526-.006,1.056-.007,1.584-.007s1.059,0,1.578,0,1.054,0,1.581,0h0a.882.882,0,0,1,.527.172,12.23,12.23,0,0,1,1.045.988C422.332,565.083,421.8,565.085,421.292,565.082Zm-2.617.009v.024h0Z"
                transform="translate(-413.78 -562.633)"
                fill="#1d1d1b"
              />
            </svg>

            <span>All (selected folder) </span>
            <div className="ps-4 d-inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.23"
                height="5.302"
                viewBox="0 0 9.23 5.302"
              >
                <path
                  id="Path_44454"
                  data-name="Path 44454"
                  d="M681.411,521.484l3.929-3.929a.687.687,0,0,0-.486-1.172.68.68,0,0,0-.485.2l-3.443,3.442-3.443-3.442a.686.686,0,1,0-.971.97l3.928,3.929a.687.687,0,0,0,.971,0Z"
                  transform="translate(-676.31 -516.383)"
                  fill="#1d1d1b"
                />
              </svg>
            </div>
          </div>
          <div class="px-3 " style={{ width: "460px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="#C0CEDE"
              width="16.775"
              height="16.719"
              viewBox="0 0 16.775 16.719"
            >
              <path
                id="Path_44445"
                data-name="Path 44445"
                d="M431.587,535.431l-4.226-4.227a6.9,6.9,0,1,0-1.059,1.076l4.218,4.218a.754.754,0,0,0,1.067-1.067Zm-9.64-3.109a5.408,5.408,0,1,1,5.408-5.407A5.414,5.414,0,0,1,421.947,532.322Z"
                transform="translate(-415.032 -519.999)"
                fill="#1d1d1b"
              />
            </svg>
            <span className="w-100">
              <input
                className="ps-1 pe-5 "
                type="text"
                placeholder="Search within all folders and content, or a specific folder's
              content"
                value={inputValue}
                onChange={handleSearchChange}
                style={{ width: "398px", border: "none" }}
              ></input>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="#C0CEDE"
              width="13.077"
              height="20"
              viewBox="0 0 13.077 20"
            >
              <path
                id="Union_1988"
                data-name="Union 1988"
                d="M680.685,1425.573H678.19a.806.806,0,0,1-.6-.243.721.721,0,0,1-.165-.564.735.735,0,0,1,.785-.63h1.975v-1.345l-.125-.022c-.172-.03-.354-.059-.527-.094a6.482,6.482,0,0,1-4.418-3.38,6.358,6.358,0,0,1-.733-2.985.7.7,0,0,1,.664-.728h.005a.7.7,0,0,1,.755.642c.02.15.035.31.057.46a5.776,5.776,0,0,0,.157.989,4.863,4.863,0,0,0,3.044,3.359,5.245,5.245,0,0,0,1.909.379,5.006,5.006,0,0,0,2.745-.864,4.948,4.948,0,0,0,2.256-3.548c.015-.135.03-.28.037-.43.008-.126.02-.261.035-.391a.694.694,0,0,1,.679-.6l.019-.008a.718.718,0,0,1,.512.217.7.7,0,0,1,.2.5,6.538,6.538,0,0,1-4.648,6.249c-.28.086-.56.138-.858.2-.1.015-.2.037-.31.059v1.331h1.926a1.386,1.386,0,0,1,.379.052.709.709,0,0,1,.46.77.721.721,0,0,1-.63.6.611.611,0,0,1-.135.007Zm-3.528-8.207a5.129,5.129,0,0,1-.158-1.176c-.007-1.966-.022-4.3,0-6.665a3.806,3.806,0,0,1,2.32-3.641,1.987,1.987,0,0,1,.266-.108,3.808,3.808,0,0,1,1.247-.2h.072a3.931,3.931,0,0,1,1.24.2,3.377,3.377,0,0,1,.679.282,3.74,3.74,0,0,1,1.98,3.43c.022,2.32.015,4.606.008,6.746a3.909,3.909,0,0,1-3.049,3.863,3.488,3.488,0,0,1-.858.1,3.93,3.93,0,0,1-3.745-2.832Zm3.439-10.38a2.433,2.433,0,0,0-2.155,2.345c-.022,2.753-.015,5,0,7.083a2.455,2.455,0,0,0,2.458,2.349,2.3,2.3,0,0,0,.568-.071,2.44,2.44,0,0,0,1.9-2.416c.007-.778.007-1.57.007-2.335-.007-.352-.007-.706-.007-1.065v-.888c.007-.8.007-1.639,0-2.451a3.244,3.244,0,0,0-.086-.733,2.438,2.438,0,0,0-2.394-1.83,2.154,2.154,0,0,0-.29.012Z"
                transform="translate(-674.376 -1405.574)"
              />
            </svg>
          </div>
        </div>
        <div class="bg-white px-3 py-2 mx-3">
          <strong class="pe-3">All Status </strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.23"
            height="5.302"
            viewBox="0 0 9.23 5.302"
          >
            <path
              id="Path_44454"
              data-name="Path 44454"
              d="M681.411,521.484l3.929-3.929a.687.687,0,0,0-.486-1.172.68.68,0,0,0-.485.2l-3.443,3.442-3.443-3.442a.686.686,0,1,0-.971.97l3.928,3.929a.687.687,0,0,0,.971,0Z"
              transform="translate(-676.31 -516.383)"
              fill="#1d1d1b"
            />
          </svg>
        </div>
        <div class="bg-white p-2 me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.45"
            height="17.961"
            viewBox="0 0 18.45 17.961"
          >
            <g
              id="arrow-up-to-line"
              transform="translate(21.225 20.98) rotate(180)"
            >
              <path
                id="Path_80809"
                data-name="Path 80809"
                d="M12.743,9.724,15.4,12.378a.739.739,0,0,0,1.031-1.053h0L12.486,7.385a.735.735,0,0,0-1.005.034L7.563,11.336a.738.738,0,0,0,1.053,1.03h0l2.651-2.648V20.268a.739.739,0,0,0,1.477,0h0Z"
              />
              <path
                id="Path_80810"
                data-name="Path 80810"
                d="M3.514,4.5H20.486a.739.739,0,1,0,0-1.478H3.514a.739.739,0,1,0,0,1.478Z"
              />
            </g>
          </svg>
        </div>
        <div class="bg-white p-2">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <title>filter</title>
            <path d="M12.014 3.165h7.379c0.006-0 0.013-0 0.020-0 1.072 0 1.94 0.869 1.94 1.94 0 0.521-0.206 0.995-0.54 1.343l0.001-0.001q-3.067 3.37-6.132 6.736c-0.163 0.165-0.264 0.391-0.264 0.641 0 0.015 0 0.030 0.001 0.045l-0-0.002c0.015 1.127 0 2.252 0.008 3.378 0.001 0.013 0.001 0.028 0.001 0.043 0 0.279-0.134 0.527-0.341 0.683l-0.002 0.002q-1.635 1.304-3.263 2.613l-0.104 0.080c-0.118 0.105-0.274 0.169-0.445 0.169-0.111 0-0.216-0.027-0.308-0.075l0.004 0.002c-0.237-0.111-0.397-0.347-0.397-0.62 0-0.016 0.001-0.031 0.002-0.047l-0 0.002v-6.362c0-0.008 0.001-0.018 0.001-0.027 0-0.161-0.064-0.308-0.169-0.414l0 0-6.201-6.817c-0.344-0.35-0.556-0.83-0.556-1.359 0-0.838 0.532-1.552 1.276-1.824l0.013-0.004c0.216-0.073 0.465-0.115 0.723-0.115 0.013 0 0.027 0 0.040 0l-0.002-0q3.659-0.013 7.315-0.009zM10.959 18.674c0.034-0.014 0.062-0.029 0.089-0.045l-0.003 0.002c0.624-0.506 1.255-1.010 1.883-1.525 0.064-0.066 0.104-0.157 0.104-0.257v-0c0.007-1.163 0.009-2.325 0-3.486-0-0.009-0.001-0.020-0.001-0.031 0-0.268 0.106-0.512 0.278-0.691l-0 0q3.118-3.43 6.227-6.859c0.074-0.080 0.144-0.162 0.218-0.241 0.12-0.103 0.196-0.255 0.196-0.425 0-0.082-0.018-0.16-0.050-0.231l0.001 0.004c-0.093-0.206-0.296-0.347-0.532-0.347-0.023 0-0.046 0.001-0.069 0.004l0.003-0h-14.589c-0.032-0.006-0.069-0.010-0.106-0.010-0.319 0-0.578 0.259-0.578 0.578 0 0.187 0.089 0.353 0.227 0.459l0.001 0.001q3.222 3.533 6.433 7.078c0.167 0.172 0.269 0.406 0.269 0.664 0 0.007-0 0.014-0 0.022l0-0.001c-0.007 1.175 0 2.353 0 3.528z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopFilterComponent;
