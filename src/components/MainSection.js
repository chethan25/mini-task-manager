import Loader from 'react-loader-spinner';
import { FaRegEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

import './main-section.css';

const MainSection = ({ tasks, users, isLoading, handleModalClick }) => {
  return (
    <div className="main-section">
      <div className="main-section-header-container">
        <div className="main-section-header-title-container">
          <h2 className="main-section-header-title">Manage Tasks</h2>
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
              <Loader type="TailSpin" height={60} width={60} color="#c38d9e" />
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
                  <FaRegEdit className="action-icons" />
                  <FaTrashAlt className="action-icons" />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

// user.id === task.assigned_to;
export default MainSection;
