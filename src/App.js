import { useState, useEffect } from 'react';

import TasksService from './services/tasks-api';

import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Modal from './components/Modal';
import UpdateModal from './components/UpdateModal';

import './App.css';

function App() {
  // Api data
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Form popup
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Create task form
  const [newTaskMessage, setNewTaskMessage] = useState('');
  const [newTaskAssignTo, setNewTaskAssignTo] = useState('1');
  const [newTaskPriority, setNewTaskPriority] = useState('3');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');
  const [newTaskDueTime, setNewTaskDueTime] = useState('');

  // Task id for update
  const [taskId, setTaskId] = useState('');

  // Task Priority
  const [allTasksSelected, setAllTasksSelected] = useState(true);
  const [highTasksSelected, setHighTasksSelected] = useState(false);
  const [MidTasksSelected, setMidTasksSelected] = useState(false);
  const [lowTasksSelected, setLowTasksSelected] = useState(false);

  // Search Task
  const [searchInput, setSearchInput] = useState('');

  // Fetch and render task and user data on initial render
  useEffect(() => {
    getTasks();
    getUsers();
  }, []);

  // Fetch task data
  // Set task data to state
  // Set loading state to false after data loads
  const getTasks = async () => {
    setIsLoading(true);
    const tasksData = await TasksService.getTasksList();

    setTasks(tasksData.tasks);
    setIsLoading(false);
  };

  // Fetch user data
  // Set user data to state
  // Set loading state to false after data loads
  const getUsers = async () => {
    setIsLoading(true);
    const usersData = await TasksService.getUsersList();

    setUsers(usersData.users);
    setIsLoading(false);
  };

  // Toggle modal state
  // Set form states to default values
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

  // Add Task
  const addTask = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append('message', newTaskMessage);
    formdata.append('due_date', `${newTaskDueDate} ${newTaskDueTime}`);
    formdata.append('priority', newTaskPriority);
    formdata.append('assigned_to', newTaskAssignTo);

    const newTaskResponse = await TasksService.postNewTask(formdata);
    console.log(newTaskResponse);

    // Reload tasks after adding task
    getTasks();

    // Set form states to default values
    setNewTaskMessage('');
    setNewTaskAssignTo('1');
    setNewTaskPriority('3');
    setNewTaskDueDate('');
    handleModalClick();
    setNewTaskDueTime();
  };

  // Toggle update modal state
  // Set task id to state
  const handleOnClickEdit = (e, id) => {
    setShowUpdateModal((prev) => !prev);
    setTaskId(id);
  };

  // Toggle update modal state
  // Set form states to default values
  const handleUpdateModalClick = () => {
    setShowUpdateModal((prev) => !prev);
    setNewTaskMessage('');
    setNewTaskAssignTo('1');
    setNewTaskPriority('3');
    setNewTaskDueDate('');
    setNewTaskDueTime('');
  };

  // Update Task
  const updateTask = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append('message', newTaskMessage);
    formdata.append('due_date', `${newTaskDueDate} ${newTaskDueTime}`);
    formdata.append('priority', newTaskPriority);
    formdata.append('assigned_to', newTaskAssignTo);
    formdata.append('taskid', taskId);

    const updateTaskResponse = await TasksService.updateTask(formdata);
    console.log(updateTaskResponse);

    // Reload tasks after updating task
    getTasks();

    // Set form states to default values
    setNewTaskMessage('');
    setNewTaskAssignTo('1');
    setNewTaskPriority('3');
    setNewTaskDueDate('');
    handleOnClickEdit();
    setNewTaskDueTime('');
  };

  // Delete Task
  const hadnleOnClickDelete = async (e, id) => {
    let formdata = new FormData();
    formdata.append('taskid', id);

    const deleteTaskResponse = await TasksService.deleteTask(formdata);
    console.log(deleteTaskResponse);

    // Reload tasks after deleting task
    getTasks();
  };

  // Sort by due date
  const handleOnChangeSortBy = (e) => {
    if (e.target.value === 'recent') {
      const sortByRecent = [...tasks];

      sortByRecent.sort((a, b) => new Date(b.due_date) - new Date(a.due_date));
      setTasks(sortByRecent);
    } else if (e.target.value === 'oldest') {
      const sortByOldest = [...tasks];

      sortByOldest.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
      setTasks(sortByOldest);
    } else {
      // Default select value
      getTasks();
    }
  };

  // Sort by priority
  // All tasks
  const handleOnClickAllTasks = () => {
    setAllTasksSelected(true);
    setHighTasksSelected(false);
    setMidTasksSelected(false);
    setLowTasksSelected(false);

    // Fetch all tasks
    getTasks();
  };

  // High priority tasks
  const handleOnClickHighTasks = () => {
    setHighTasksSelected(true);
    setAllTasksSelected(false);
    setMidTasksSelected(false);
    setLowTasksSelected(false);

    const highPriorityTasks = [...tasks];

    highPriorityTasks.sort((a, b) => b.priority - a.priority);
    setTasks(highPriorityTasks);
  };

  // Medium priority tasks
  const handleOnClickMidTasks = () => {
    setMidTasksSelected(true);
    setAllTasksSelected(false);
    setHighTasksSelected(false);
    setLowTasksSelected(false);

    const MidPriorityTasks = [...tasks];

    // Set custom sort order to [med, high, low]
    let sortOrder = ['2', '3', '1'];

    MidPriorityTasks.sort(function (a, b) {
      return sortOrder.indexOf(a.priority) - sortOrder.indexOf(b.priority);
    });

    setTasks(MidPriorityTasks);
  };

  // Low priority tasks
  const handleOnClickLowTasks = () => {
    setLowTasksSelected(true);
    setAllTasksSelected(false);
    setHighTasksSelected(false);
    setMidTasksSelected(false);

    const lowPriorityTasks = [...tasks];

    lowPriorityTasks.sort((a, b) => a.priority - b.priority);
    setTasks(lowPriorityTasks);
  };

  // Search Tasks
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);

    const searchTasks = [...tasks];

    // Filter tasks where search input string is present in task messages
    const searchResults = searchTasks.filter((task) =>
      task.message.toLowerCase().includes(searchInput.toLowerCase())
    );

    setTasks(searchResults);
  };

  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="header-title">Task Manager</h1>
      </header>
      <div className="section-container">
        <Navbar
          handleOnClickAllTasks={handleOnClickAllTasks}
          handleOnClickHighTasks={handleOnClickHighTasks}
          handleOnClickMidTasks={handleOnClickMidTasks}
          handleOnClickLowTasks={handleOnClickLowTasks}
          allTasksSelected={allTasksSelected}
          highTasksSelected={highTasksSelected}
          MidTasksSelected={MidTasksSelected}
          lowTasksSelected={lowTasksSelected}
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
        <MainSection
          tasks={tasks}
          users={users}
          isLoading={isLoading}
          handleModalClick={handleModalClick}
          handleOnClickEdit={handleOnClickEdit}
          hadnleOnClickDelete={hadnleOnClickDelete}
          handleOnChangeSortBy={handleOnChangeSortBy}
        />
        {showModal && (
          <Modal
            handleModalClick={handleModalClick}
            users={users}
            handleOnSubmit={addTask}
            handleOnChangeMessage={handleOnChangeMessage}
            newTaskMessage={newTaskMessage}
            handleOnChangeAssign={handleOnChangeAssign}
            handleOnChangePriority={handleOnChangePriority}
            handleOnChangeDueDate={handleOnChangeDueDate}
            handleOnChangeDueTime={handleOnChangeDueTime}
          />
        )}
        {showUpdateModal && (
          <UpdateModal
            handleModalClick={handleUpdateModalClick}
            users={users}
            handleOnSubmitUpdate={updateTask}
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
