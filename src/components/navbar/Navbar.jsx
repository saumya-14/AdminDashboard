import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text " placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
           <div className="item">
          <LanguageIcon className="icon"/>
          English 
           </div>
           <div className="item">
         <DarkModeIcon className="icon"/>

           </div>
           <div className="item">
           <FullscreenExitIcon className="icon"/>
          
           </div>
           <div className="item">
         <NotificationsIcon className="icon"/>

          <div className="counter">1</div>
           </div>
           <div className="item">
         <ChatBubbleIcon className="icon"/>
         <div className="counter">2</div>
           </div>
           <div className="item">
         <FormatListBulletedIcon className="icon"/>
          
           </div>
           <div className="item">
           <img src="https://images.unsplash.com/photo-1633639071815-549568b81057?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
           className="avatar"
           />
          
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
