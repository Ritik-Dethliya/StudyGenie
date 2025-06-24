import { useState } from "react";
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser,FiEdit, FiMenu,FiCpu,FiVideo } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { FaUserPlus,FaComments } from "react-icons/fa";
import "../Style/NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="nav-left">
                <h2 id="logo">StudyGenie</h2>
            </div>

            {/* Search Bar */}
            <div className="nav-center">
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            {/* Navigation Icons */}
            <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                <NavLink to='/home'><FiHome className="nav-icon" /></NavLink>
                <NavLink to="/uploadpost/"><FiEdit className="nav-icon" /></NavLink>
                <NavLink to='/profile/'><FiUser className="nav-icon" /></NavLink> 
                <NavLink to='/aichat'><FiCpu className="nav-icon"/></NavLink>
                <NavLink to='/tasks/'><FiVideo className="nav-icon"/></NavLink>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu />
            </div>
        </nav>
    );
}

export default NavBar;
