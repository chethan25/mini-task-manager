import { FaTimes } from 'react-icons/fa';

import './modal.css';

const Modal = ({ handleModalClick, users }) => {
  return (
    <section className="modal-section">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-header-title">Create a Task</h3>
          <FaTimes className="close-icon" onClick={handleModalClick} />
        </div>
        <form className="form-container">
          <div className="task-message-container">
            <label for="message">Task Message</label>
            <input
              className="message-input"
              type="text"
              name="message"
              placeholder="Learn React"
            />
          </div>
          <div className="task-assign-container">
            <label for="assign">Assign To</label>
            <select className="assign-select" name="assign">
              {users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="task-priority-container">
            <label for="priority">Priority</label>
            <select className="priority-select" name="priority">
              <option value="3">High</option>
              <option value="2">Mediun</option>
              <option value="1">Low</option>
            </select>
          </div>
          <div className="task-due-date-container">
            <label for="due-date">Due Date</label>
            <input className="date-input" name="due-date" type="date" />
          </div>
          <button className="add-btn" type="button">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default Modal;
