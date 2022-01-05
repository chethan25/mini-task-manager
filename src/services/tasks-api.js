import axios from 'axios';

const baseUrl = 'https://devza.com/tests/tasks';
const token = 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a';

// List Tasks
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

// List Users
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
};
