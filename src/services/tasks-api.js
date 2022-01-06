import axios from 'axios';

const baseUrl = 'https://devza.com/tests/tasks';
const token = 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a';

// List tasks
const getTasksList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/list`, {
      headers: {
        AuthToken: token,
      },
    });
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Create task
const postNewTask = async (formdata) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, formdata, {
      headers: {
        AuthToken: token,
      },
    });
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Update task
const updateTask = async (formdata) => {
  try {
    const response = await axios.post(`${baseUrl}/update`, formdata, {
      headers: {
        AuthToken: token,
      },
    });
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Delete task
const deleteTask = async (formdata) => {
  try {
    const response = await axios.post(`${baseUrl}/delete`, formdata, {
      headers: {
        AuthToken: token,
      },
    });
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

// List users
const getUsersList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/listusers`, {
      headers: {
        AuthToken: token,
      },
    });
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasksList,
  getUsersList,
  postNewTask,
  updateTask,
  deleteTask,
};
