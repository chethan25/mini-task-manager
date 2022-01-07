import Loader from 'react-loader-spinner';
import { FaRegEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

import './main-section.css';

const MainSection = ({
  tasks,
  users,
  isLoading,
  handleModalClick,
  handleOnClickEdit,
  hadnleOnClickDelete,
  handleOnChangeSortBy,
}) => {
  return (
    <div className="main-section">
      <div className="main-section-header-container">
        <div className="main-section-header-title-container">
          <h2 className="main-section-header-title">Manage Tasks</h2>
        </div>
        <div className="main-section-header-sort-date-container">
          <label htmlFor="sort-date">Sort by Due Date</label>
          <select
            className="sort-date-select"
            name="sort-date"
            onChange={handleOnChangeSortBy}
          >
            <option value="default" defaultValue>
              Default
            </option>
            <option value="recent">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div
          className="main-section-header-add-task-container"
          onClick={handleModalClick}
        >
          <button className="add-task-btn" type="button">
            Add New Task
          </button>
        </div>
      </div>
      <div className="main-section-tasks-container">
        <ul className="tasks-list">
          {isLoading ? (
            <div className="tail-spin-loader-container">
              <Loader type="TailSpin" height={55} width={55} color="#c38d9e" />
            </div>
          ) : (
            tasks.map((task) => (
              <li key={task.id}>
                <div
                  className={
                    (task.priority === '3'
                      ? 'high-priority'
                      : task.priority === '2'
                      ? 'mid-priority'
                      : 'low-priority') + ' task-container'
                  }
                >
                  <p className="task-message-text">{task.message}</p>
                  <p className="task-assigned-text">
                    {users.find((user) => user.id === task.assigned_to)
                      ? users.find((user) => user.id === task.assigned_to).name
                      : 'Not Assigned'}
                  </p>
                  <h6 className="due-date-text">
                    {new Date(task.due_date).toDateString()}
                  </h6>
                  <FaRegEdit
                    className="action-icons"
                    onClick={(e) => handleOnClickEdit(e, task.id)}
                  />
                  <FaTrashAlt
                    className="action-icons"
                    onClick={(e) => hadnleOnClickDelete(e, task.id)}
                  />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainSection;
