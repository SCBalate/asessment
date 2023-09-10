import React from "react";
import "../App.css";

const BreadcrumbComponent = () => {
  return (
    <>
      <p className="text-secondary mt-3 fs-14">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>house-solid</title>
          <path d="M20.599 10.858l-7.779-7.541c-0.215-0.197-0.503-0.317-0.819-0.317s-0.604 0.121-0.82 0.318l0.001-0.001-7.78 7.538c-0.223 0.217-0.361 0.52-0.362 0.856v7.164c0.016 1.174 0.971 2.121 2.147 2.123h5.3c0.131-0.002 0.248-0.063 0.325-0.157l0.001-0.001c0.084-0.1 0.135-0.231 0.135-0.373 0-0.002-0-0.004-0-0.006v0-3.986c-0-0.006-0-0.014-0-0.021 0-0.62 0.503-1.124 1.123-1.124h0c0.56 0.085 0.985 0.563 0.985 1.141 0 0.001 0 0.003 0 0.005v-0 3.98c-0 0.004-0 0.008-0 0.013 0 0.15 0.058 0.286 0.153 0.388l-0-0c0.074 0.084 0.18 0.139 0.299 0.145l0.001 0h5.287c0.002 0 0.004 0 0.006 0 1.181 0 2.14-0.948 2.158-2.124l0-0.002v-7.162c-0.001-0.334-0.138-0.637-0.36-0.854l-0-0z"></path>
        </svg>
        &nbsp; &gt; CLIENT &nbsp; &gt; MATTER &nbsp; &gt; TRANSACTION DETAIL
        PAGE <b className="text-dark">&nbsp;&gt; TRANSACTION CONTENTS</b>{" "}
      </p>
    </>
  );
};

export default BreadcrumbComponent;
