import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import DynamicFormSharpIcon from "@mui/icons-material/DynamicFormSharp";
import FormatAlignJustifySharpIcon from "@mui/icons-material/FormatAlignJustifySharp";
import Wrapper from "../assets/wrappers/Sidebar";
import { useState } from "react";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Wrapper>
      <div
        className={
          sidebarOpen ? "show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <IconButton className="toggle-button" onClick={toggle}>
            <FormatAlignJustifySharpIcon />
          </IconButton>
          <div className="sidebar-links">
            <div className="sidebar-link">
              <IconButton className="icon">
                <FeedSharpIcon />
              </IconButton>
              <p className="sidebar-link-title">My Expenses</p>
            </div>
            <div className="sidebar-link">
              <IconButton className="icon">
                <CalendarMonthSharpIcon />
              </IconButton>
              <p className="sidebar-link-title">Calendar</p>
            </div>
            <div className="sidebar-link">
              <IconButton className="icon">
                <DynamicFormSharpIcon />
              </IconButton>
              <p className="sidebar-link-title">Create Expense</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
