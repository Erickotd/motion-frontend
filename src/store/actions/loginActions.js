import { LOGIN, LOGIN_ERROR, LOGOUT } from '../actionTypes';
import Axios from '../../axios/axios';
import baseUrl from '../../constants';

export const login = (token) => {
  return {
    type: LOGIN,
    payload: token,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginAction = (userAcessInfo) => async (dispatch) => {
  try {
    const response = await Axios.post(`${baseUrl}auth/token/`, userAcessInfo);
    const {
      data: { access: token },
    } = response;
    dispatch(login(token));
    localStorage.setItem('token', token);
    return response;
  } catch (error) {
    dispatch(loginError('The credentials are not valid'));
    return error;
  }
};
