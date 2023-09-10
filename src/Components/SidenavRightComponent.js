import React from "react";
import "../App.css";

const NavItem = ({ name, iconSrc }) => {
  return (
    <div className="d-flex p-1 rounded-1 flex-column justify-content-center align-items-center">
      <img alt={name} src={`/assets/${iconSrc}`} height={20} width={20} />
      <p className="text-dark fw-bold fs-10 mt-1 text-center">{name}</p>
    </div>
  );
};

const SidenavRightComponent = () => {
  const navItems = [
    {
      name: "Transactions",
      iconSrc: "house.svg",
    },
    {
      name: "Tasks",
      iconSrc: "list-line-align-right.svg",
    },
    {
      name: "Phases",
      iconSrc: "clock-circle.svg",
    },
    {
      name: "Sign Tracking",
      iconSrc: "clipboard-pen.svg",
    },
    {
      name: "Critical Info Setting",
      iconSrc: "bookmark.svg",
    },
    {
      name: "Analysis Phase",
      iconSrc: "analysis.svg",
    },
    {
      name: "Calenders",
      iconSrc: "calender.svg",
    },
  ];

  return (
    <div className="py-3 border-rounded">
      <div className="flex-column align-items-center border-bottom">
        {navItems.map((item, idx) => {
          return <NavItem key={idx} name={item.name} iconSrc={item.iconSrc} />;
        })}
      </div>
      <br />
      <div className="d-flex flex-column align-items-center">
        <img
          src="/assets/reports.svg"
          alt="Activity log"
          height={20}
          width={20}
        />
        <p className="text-dark fw-bold fs-10 mt-1 text-center">Activity log</p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img src="/assets/ellipsis.svg" alt="more" height={20} width={20} />
      </div>
    </div>
  );
};

export default SidenavRightComponent;
