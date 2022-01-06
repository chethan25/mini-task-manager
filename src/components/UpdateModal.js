import { FaTimes } from 'react-icons/fa';

import './modal.css';

const Modal = ({
  handleModalClick,
  users,
  handleOnSubmitUpdate,
  handleOnChangeMessage,
  newTaskMessage,
  handleOnChangeAssign,
  handleOnChangePriority,
  handleOnChangeDueDate,
  handleOnChangeDueTime,
}) => {
  return (
    <section className="modal-section">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-header-title">Update Task</h3>
          <FaTimes className="close-icon" onClick={handleModalClick} />
        </div>
        <form className="form-container" onSubmit={handleOnSubmitUpdate}>
          <div className="task-message-container">
            <label htmlFor="message">Task Message</label>
            <input
              className="message-input"
              type="text"
              name="message"
              placeholder="Learn React"
              onChange={handleOnChangeMessage}
              value={newTaskMessage}
            />
          </div>
          <div className="task-assign-container">
            <label htmlFor="assign">Assign To</label>
            <select
              className="assign-select"
              name="assign"
              onChange={handleOnChangeAssign}
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="task-priority-container">
            <label htmlFor="priority">Priority</label>
            <select
              className="priority-select"
              name="priority"
              onChange={handleOnChangePriority}
            >
              <option value="3">High</option>
              <option value="2">Mediun</option>
              <option value="1">Low</option>
            </select>
          </div>
          <div className="task-due-date-time-container">
            <div className="task-due-date-container">
              <label htmlFor="due-date">Due Date</label>
              <input
                className="date-input"
                name="due-date"
                type="date"
                onChange={handleOnChangeDueDate}
              />
            </div>
            <div className="task-due-time-container">
              <label htmlFor="due-time">Due Time</label>
              <input
                className="time-input"
                name="due-time"
                type="time"
                step="1"
                onChange={handleOnChangeDueTime}
              />
            </div>
          </div>

          <button className="add-btn" type="submit">
            Update Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default Modal;
