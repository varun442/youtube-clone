import "./_sideBar.scss";
import React from "react";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";
const SideBar = ({ toggleSideBar, handleToggleSideBar }) => {
  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(logout())
  }
  
  
  return (
    <nav className={toggleSideBar ? "sidebar open" : "sidebar"} onClick={()=> handleToggleSideBar(false)}>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>

      <hr />

      <li>
        <MdExitToApp size={23} onClick={logOutHandler}/>
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
};

export default SideBar;
