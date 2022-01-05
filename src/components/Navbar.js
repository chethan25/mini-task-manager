import { FaSearch } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import { FcHighPriority } from 'react-icons/fc';
import { FcMediumPriority } from 'react-icons/fc';
import { FcLowPriority } from 'react-icons/fc';

import './nav-bar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar-container">
      <form className="nav-bar-form">
        <div className="search-icon-container">
          <FaSearch className="fa-search" />
        </div>

        <input
          className="search-input"
          type="text"
          placeholder="Search tasks"
        />
      </form>
      <h4 className="nav-bar-title">Navigation</h4>
      <ul className="tasks-types-list">
        <div className="tasks-types-list-item-container">
          <FaTasks className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">All Tasks</li>
        </div>
        <div className="tasks-types-list-item-container">
          <FcHighPriority className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">High Priority Tasks</li>
        </div>
        <div className="tasks-types-list-item-container">
          <FcMediumPriority className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">Medium Priority Tasks</li>
        </div>
        <div className="tasks-types-list-item-container">
          <FcLowPriority className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">Low Priority Tasks</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
