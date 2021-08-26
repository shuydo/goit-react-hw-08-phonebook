import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// console.log(axios.defaults.baseURL)
// qweqwe qwerty@gmai.com 1234qaz 
// user456/7 user456@gmail.com user456

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
  // POST @ /users/signup body: { name, email, password }. Signup успешно - добавляем токен в HTTP-заголовок
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // Добавить обработку ошибки error.message
  }
});
//  POST @ /users/login body: { email, password }. Login успешно - добавляем токен в HTTP-заголовок
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
        // Добавить обработку ошибки error.message

  }
});
// POST @ /users/logout headers: Authorization: Bearer token. Logout успешно - удаляем токен из HTTP-заголовка
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // Добавить обработку ошибки error.message
  }
});
/* GET @ /users/current
 * headers: Authorization: Bearer token
 * 1. Забираем токен из стейта через getState()
 * 2. Если токен: нет, выходим не выполняя никаких операций
 * 3.             есть, добавляет его в HTTP-заголовок и выполянем операцию*/
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // Добавить обработку ошибки error.message
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
