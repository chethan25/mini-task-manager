import { FaSearch } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import { FcHighPriority } from 'react-icons/fc';
import { FcMediumPriority } from 'react-icons/fc';
import { FcLowPriority } from 'react-icons/fc';

import './nav-bar.css';

const Navbar = ({
  handleOnClickAllTasks,
  handleOnClickHighTasks,
  handleOnClickMidTasks,
  handleOnClickLowTasks,
  allTasksSelected,
  highTasksSelected,
  MidTasksSelected,
  lowTasksSelected,
  handleSearchInput,
  searchInput,
  handleOnSubmitSearch,
}) => {
  return (
    <nav className="nav-bar-container">
      <form className="nav-bar-form" onSubmit={handleOnSubmitSearch}>
        <div className="search-icon-container">
          <FaSearch className="fa-search" />
        </div>

        <input
          className="search-input"
          type="text"
          placeholder="Search tasks"
          onChange={handleSearchInput}
          value={searchInput}
        />
      </form>
      <h4 className="nav-bar-title">Your Tasks</h4>
      <ul className="tasks-types-list">
        <div
          className={
            (allTasksSelected ? 'selected' : '') +
            ' tasks-types-list-item-container'
          }
          onClick={handleOnClickAllTasks}
        >
          <FaTasks className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">All Tasks</li>
        </div>
        <div
          className={
            (highTasksSelected ? 'selected' : '') +
            ' tasks-types-list-item-container'
          }
          onClick={handleOnClickHighTasks}
        >
          <FcHighPriority className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">High Priority Tasks</li>
        </div>
        <div
          className={
            (MidTasksSelected ? 'selected' : '') +
            ' tasks-types-list-item-container'
          }
          onClick={handleOnClickMidTasks}
        >
          <FcMediumPriority className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">Medium Priority Tasks</li>
        </div>
        <div
          className={
            (lowTasksSelected ? 'selected' : '') +
            ' tasks-types-list-item-container'
          }
          onClick={handleOnClickLowTasks}
        >
          <FcLowPriority className="nav-bar-list-icons" />
          <li className="tasks-types-list-item">Low Priority Tasks</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
