import React, { useContext } from 'react'
import "./sidebar.scss"
import CategoryIcon from '@mui/icons-material/Category';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';



const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Admin</span>
        </Link>
        
        </div>
        <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <li>
              <DashboardIcon  className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>

            
            <li>
              <PersonIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>

            
            <li>
              <CategoryIcon className="icon"/>
                <span>Products</span>
            </li>
            </Link>
            
            <li>
              <ViewListIcon className="icon"/>
                <span>Orders</span>
            </li>
            <li>
              <AirportShuttleIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <QueryStatsIcon className="icon"/>
                <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon"/>
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <FitnessCenterIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
            <SettingsIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className="icon"/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
      <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        
      </div>
    </div>
  )
}

export default Sidebar
