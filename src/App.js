import { useState, useEffect } from 'react';

import TasksService from './services/tasks-api';

import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTasks();
    getUsers();
  }, []);

  const getTasks = async () => {
    const tasksData = await TasksService.getTasksList();

    setTasks(tasksData.tasks);
  };

  const getUsers = async () => {
    setIsLoading(true);
    const usersData = await TasksService.getUsersList();

    setUsers(usersData.users);
    setIsLoading(false);
  };

  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="header-title">Task Manager</h1>
      </header>
      <div className="section-container">
        <Navbar />
        <MainSection tasks={tasks} users={users} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
