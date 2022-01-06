import { useState, useEffect } from 'react';

import TasksService from './services/tasks-api';

import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Modal from './components/Modal';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // Create task form
  const [newTaskMessage, setNewTaskMessage] = useState('');
  const [newTaskAssignTo, setNewTaskAssignTo] = useState('1');
  const [newTaskPriority, setNewTaskPriority] = useState('3');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');
  const [newTaskDueTime, setNewTaskDueTime] = useState('');

  useEffect(() => {
    getTasks();
    getUsers();
  }, []);

  const getTasks = async () => {
    setIsLoading(true);
    const tasksData = await TasksService.getTasksList();

    setTasks(tasksData.tasks);
    setIsLoading(false);
  };

  const getUsers = async () => {
    setIsLoading(true);
    const usersData = await TasksService.getUsersList();

    setUsers(usersData.users);
    setIsLoading(false);
  };

  const handleModalClick = () => {
    setShowModal((prev) => !prev);
    setNewTaskMessage('');
    setNewTaskAssignTo('1');
    setNewTaskPriority('3');
    setNewTaskDueDate('');
    setNewTaskDueTime('');
  };

  const handleOnChangeMessage = (e) => {
    setNewTaskMessage(e.target.value);
  };

  const handleOnChangeAssign = (e) => {
    setNewTaskAssignTo(e.target.value);
  };

  const handleOnChangePriority = (e) => {
    setNewTaskPriority(e.target.value);
  };

  const handleOnChangeDueDate = (e) => {
    setNewTaskDueDate(e.target.value);
  };

  const handleOnChangeDueTime = (e) => {
    setNewTaskDueTime(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append('message', newTaskMessage);
    formdata.append('due_date', `${newTaskDueDate} ${newTaskDueTime}`);
    formdata.append('priority', newTaskPriority);
    formdata.append('assigned_to', newTaskAssignTo);

    const newTaskResponse = await TasksService.postNewTask(formdata);
    console.log(newTaskResponse);

    getTasks();

    setNewTaskMessage('');
    setNewTaskAssignTo('1');
    setNewTaskPriority('3');
    setNewTaskDueDate('');
    handleModalClick();
    setNewTaskDueTime();
  };

  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="header-title">Task Manager</h1>
      </header>
      <div className="section-container">
        <Navbar />
        <MainSection
          tasks={tasks}
          users={users}
          isLoading={isLoading}
          handleModalClick={handleModalClick}
        />
        {showModal && (
          <Modal
            handleModalClick={handleModalClick}
            users={users}
            addTask={addTask}
            handleOnChangeMessage={handleOnChangeMessage}
            newTaskMessage={newTaskMessage}
            handleOnChangeAssign={handleOnChangeAssign}
            handleOnChangePriority={handleOnChangePriority}
            handleOnChangeDueDate={handleOnChangeDueDate}
            handleOnChangeDueTime={handleOnChangeDueTime}
          />
        )}
      </div>
    </div>
  );
}

export default App;
