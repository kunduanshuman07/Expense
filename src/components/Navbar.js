import { IconButton} from "@mui/material";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";


import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar-container">
        <div className="navbar-header">
          <h3>ExpenseTracker</h3>
        </div>
        <div className="icons">
          <IconButton className="icon">
            <NotificationsActiveSharpIcon />
          </IconButton>
          <IconButton className="icon">
            <SettingsSharpIcon />
          </IconButton>
          <IconButton className="icon">
            <PersonOutlineSharpIcon />
          </IconButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
