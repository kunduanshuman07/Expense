import React from "react";
import StatItem from "../components/StatItem";
import Wrapper from "../assets/wrappers/Dashboard";

import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { ChartsContainer } from "../components";
const defaultStats = [
  {
    title: "Pending",
    count: 0,
    icon: <FaSuitcaseRolling />,
    color: "#e9b949",
    bcg: "#fcefc7",
  },
  {
    title: "Approved",
    count: 0,
    icon: <FaCalendarCheck />,
    color: "#647acb",
    bcg: "#e0e8f9",
  },
  {
    title: "Rejected",
    count: 0,
    icon: <FaBug />,
    color: "#d66a6a",
    bcg: "#ffeeee",
  },
];
const Dashboard = () => {
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
      {/* <ChartsContainer/> */}
    </Wrapper>
  );
};

export default Dashboard;
