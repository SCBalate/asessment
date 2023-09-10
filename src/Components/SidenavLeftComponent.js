import React from "react";
// import { ReactSVG } from 'react-svg';
import amblem from "../Assets/amblem.jpg";

import "./SidenavLeftComponent.css";

const SidenavLeftComponent = () => {
  return (
    <div>
      <div
        className="nav flex-column sideIconsBgColor vh-100 position-relative align-items-center"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <div
          className="nav-link sideIcons text-center mt-3"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="false"
        >
          <img src={amblem} height="44" width="44" alt="verical-bars" />
          <div></div>

          <div className="text-white fs-12">Transactions</div>
        </div>

        {/* <img src="src/Assets/analysis.svg" alt='analysis' /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="19.27" height="16.08" viewBox="0 0 19.27 16.08">
          <g id="Group_176975" data-name="Group 176975" transform="translate(-29.121 -26.365)">
            <path id="Path_80809" data-name="Path 80809"
              d="M33.961,26.365H29.954a.838.838,0,0,0-.833.839V41.6a.839.839,0,0,0,.838.837h4A.838.838,0,0,0,34.8,41.6V27.2a.838.838,0,0,0-.838-.837ZM30.4,41.162V27.644h3.117V41.162Z"
              fill="#1d1d1b" />
            <path id="Path_80810" data-name="Path 80810"
              d="M40.752,30.363h-4v0a.842.842,0,0,0-.839.841v10.4a.841.841,0,0,0,.839.838h4a.841.841,0,0,0,.838-.84V31.2A.841.841,0,0,0,40.752,30.363Zm-.436,1.281v9.518H37.2V31.644Z"
              fill="#1d1d1b" />
            <path id="Path_80811" data-name="Path 80811"
              d="M47.551,33.563h-4a.841.841,0,0,0-.84.84v7.2a.838.838,0,0,0,.839.837h4a.84.84,0,0,0,.838-.839V34.4A.841.841,0,0,0,47.551,33.563Zm-.436,1.28v6.319H44V34.843Z"
              fill="#1d1d1b" />
          </g>
        </svg> */}

        <img
          src="./assets/rectangle-vertical-bars.svg"
          className="mt-3"
          alt="panorama"
        />

        <div className="text-white fs-12 mt-1">Panorama</div>
        {/* </div> */}

        <img
          src="./assets/file-lines.svg"
          className="mt-4"
          alt="Transactions"
          width={20}
          height={20}
        />

        <div className="text-white fs-12 mt-1 text-center">Transactions</div>

        <img src="./assets/folder-3.svg" className="mt-4" alt="documents" />
        <div className="text-white fs-12 mt-1 text-center">Documents</div>

        <img src="./assets/envelope.svg" className="mt-4" alt="emails" />
        <div className="text-white fs-12 mt-1 text-center">E-mails</div>

        <img src="./assets/file.svg" className="mt-4" alt="reports" />
        <div className="text-white fs-12 mt-1 text-center">Reports</div>

        <img
          src="./assets/sliders.svg"
          className="mt-4"
          alt="management panel"
        />
        <div className="text-white fs-12 mt-1 text-center">
          Management Panel
        </div>

        {/* <img src="./assets/file.svg" className="mt-4" alt="management panel" />
        <div className="text-white fs-12 mt-1 text-center">Management Panel</div> */}

        <img
          src="./assets/calender-days-2.svg"
          className="mt-4"
          alt="Transaction Calender"
        />
        <div className="text-white fs-12 mt-1 text-center ">
          Tranasction Calender
        </div>

        <div className="position-absolute bottom-0 py-4">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="38"
            height="38"
            viewBox="0 0 38 38"
          >
            <defs>
              <clipPath id="clip-path">
                <circle
                  id="Ellipse_2535"
                  data-name="Ellipse 2535"
                  cx="19"
                  cy="19"
                  r="19"
                  transform="translate(0 0)"
                  fill="#8e6363"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <rect
                  id="Rectangle_31104"
                  data-name="Rectangle 31104"
                  width="38.007"
                  height="32.867"
                  fill="#002874"
                />
              </clipPath>
            </defs>
            <g
              id="Group_176974"
              data-name="Group 176974"
              transform="translate(592 -5304)"
            >
              <g
                id="Mask_Group_388"
                data-name="Mask Group 388"
                transform="translate(-592 5304)"
                clipPath="url(#clip-path)"
              >
                <g
                  id="Group_176764"
                  data-name="Group 176764"
                  transform="translate(-0.002 0)"
                >
                  <g id="Group_48387" data-name="Group 48387">
                    <g
                      id="Group_48386"
                      data-name="Group 48386"
                      clipPath="url(#clip-path-2)"
                    >
                      <path
                        id="Path_78869"
                        data-name="Path 78869"
                        d="M18.9,0a18.28,18.28,0,0,1,5.961.9A19.2,19.2,0,0,1,36.972,12.733a19.462,19.462,0,0,1,.863,3.59,19.062,19.062,0,0,1,.167,3.6,18.55,18.55,0,0,1-.894,4.893A18.958,18.958,0,0,1,34.65,29.8a19.286,19.286,0,0,1-2.558,2.991.206.206,0,0,1-.287.037c-1.31-.737-2.715-1.288-4.037-2-.752-.408-1.5-.831-2.212-1.28A2.639,2.639,0,0,1,24.55,28.1a9.707,9.707,0,0,1-.523-2.425,15.877,15.877,0,0,1-.093-1.6.307.307,0,0,1,.093-.275,3.379,3.379,0,0,0,.946-1.629,13.324,13.324,0,0,0,.595-2.175c.015-.069,0-.135.1-.152.455-.084.646-.437.784-.816a8.787,8.787,0,0,0,.577-2.533,4.177,4.177,0,0,0,0-1,.821.821,0,0,0-.762-.7c-.147,0-.184-.059-.182-.2.012-.558.081-1.113.13-1.669.025-.263.029-.526.049-.789a23.92,23.92,0,0,0,.1-3.217,6.089,6.089,0,0,0-.823-3,2.234,2.234,0,0,0-1.966-1.049.388.388,0,0,1-.3-.084,4.762,4.762,0,0,0-1.5-.89,8.5,8.5,0,0,0-2.3-.644,8.748,8.748,0,0,0-1.836-.032,7.974,7.974,0,0,0-3.1.949A6.635,6.635,0,0,0,11.88,6.734,6.1,6.1,0,0,0,11.015,10a5.173,5.173,0,0,0,.093.759.351.351,0,0,0,.351.26c.246.042.31.162.3.405-.032.983.088,1.966.093,2.936a.492.492,0,0,0,0,.069c.057.393.059.4-.319.491a.418.418,0,0,0-.292.27,2.565,2.565,0,0,0-.081,1.4,17.892,17.892,0,0,0,.457,2.16,1.779,1.779,0,0,0,.457.853.462.462,0,0,0,.369.17c.128,0,.147.059.157.17a8.746,8.746,0,0,0,.413,2.14,6.188,6.188,0,0,0,.629,1.324,1.686,1.686,0,0,1,.246,1.2c-.047.332-.032.666-.071,1a8.6,8.6,0,0,1-.826,3.035A2.529,2.529,0,0,1,11.819,29.8c-1.759.835-3.44,1.806-5.185,2.686a3.72,3.72,0,0,0-.457.28.194.194,0,0,1-.288-.029,21.624,21.624,0,0,1-1.72-1.895,19.273,19.273,0,0,1-2.037-3.118,18.479,18.479,0,0,1-.944-2.133,19.354,19.354,0,0,1-.983-3.779,18.307,18.307,0,0,1-.179-3.747,18.585,18.585,0,0,1,.919-4.971A18.936,18.936,0,0,1,3.82,7.577,18.56,18.56,0,0,1,6.076,5.063a19.379,19.379,0,0,1,3.59-2.6A19.079,19.079,0,0,1,14.436.544,19.659,19.659,0,0,1,17.065.09,15.83,15.83,0,0,1,18.9,0"
                        transform="translate(-0.002 -0.001)"
                        fill="#002874"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <path
                id="Path_80808"
                data-name="Path 80808"
                d="M566.478,1104.667c-.748-.408-1.491-.828-2.2-1.276a2.622,2.622,0,0,1-1-1.444,9.635,9.635,0,0,1-.523-2.418,15.339,15.339,0,0,1-.092-1.6.307.307,0,0,1,.092-.274,3.355,3.355,0,0,0,.943-1.623,13.4,13.4,0,0,0,.594-2.168c.014-.068,0-.134.1-.151.453-.083.644-.436.781-.812a8.711,8.711,0,0,0,.575-2.526,4.114,4.114,0,0,0,0-.991.816.816,0,0,0-.759-.7c-.148,0-.184-.059-.181-.2.012-.556.08-1.109.129-1.663.026-.262.029-.524.05-.786a24.079,24.079,0,0,0,.1-3.2,6.072,6.072,0,0,0-.821-2.99,2.221,2.221,0,0,0-1.958-1.045.394.394,0,0,1-.3-.083,4.742,4.742,0,0,0-1.491-.887,8.49,8.49,0,0,0-2.294-.642,8.7,8.7,0,0,0-1.829-.031,7.949,7.949,0,0,0-3.084.946,6.6,6.6,0,0,0-2.652,2.553,6.084,6.084,0,0,0-.863,3.256,5.042,5.042,0,0,0,.094.757.351.351,0,0,0,.351.26c.245.042.307.161.3.4-.031.981.089,1.96.094,3,.056.391.059.4-.319.489a.414.414,0,0,0-.29.269,2.548,2.548,0,0,0-.082,1.4,17.737,17.737,0,0,0,.455,2.152,1.779,1.779,0,0,0,.456.85.459.459,0,0,0,.366.168c.129,0,.148.059.158.168a8.674,8.674,0,0,0,.411,2.133,6.137,6.137,0,0,0,.627,1.321,1.682,1.682,0,0,1,.245,1.2c-.047.33-.033.663-.071.993a8.566,8.566,0,0,1-.823,3.024,2.524,2.524,0,0,1-1.17,1.151c-1.753.833-3.428,1.8-5.167,2.676a2.776,2.776,0,0,0-.58.366,13.187,13.187,0,0,0,4.678,3.267,18.859,18.859,0,0,0,21.167-3.253C569.38,1105.967,567.8,1105.379,566.478,1104.667Z"
                transform="translate(-1130.763 4230.157)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SidenavLeftComponent;
