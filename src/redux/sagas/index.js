import { takeLatest, call, put } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';

import axiosInstance from './axios';

function* fetchReports() {
  try {
    const getReports = async () => axiosInstance.get('/reports');
    const response = yield call(getReports);
    const responseData = response.data;
    yield put({ type: 'FETCH_TEAM_REPORTS_SUCCESS', payload: responseData });
  } catch (error) {
    console.log('error', error);
  }
}

function* fetchUserReports(action) {
  try {
    const response = yield call(axiosInstance.get, `/reports/user/${action.payload.id}`);
    const responseData = response.data;
    yield put({ type: 'FETCH_USER_REPORTS_SUCCESS', payload: { data: responseData, id: action.payload.id } });
  } catch (error) {
    console.log('error', error);
  }
}

function* fetchUserData(action) {
  try {
    const response = yield call(axiosInstance.get, `/users/${action.payload.id}`);
    const responseData = response.data;
    yield put({ type: 'FETCH_USER_DATA_SUCCESS', payload: { data: responseData } });
  } catch (error) {
    console.log('error', error);
  }
}

function* signin(action) {
  try {
    const signIn = async () => axiosInstance.post('/auth/signin', { ...action.payload });
    const response = yield call(signIn);
    const responseData = response.data;
    const [, responseToken] = responseData.token.split(' ');
    const decodedToken = jwt.decode(responseToken);
    const {
      firstName,
      lastName,
      email,
      title,
      id,
      command,
    } = decodedToken;
    localStorage.setItem('userToken', responseToken);
    yield put({ type: 'SIGNIN_USER_SUCCESS' });
    yield put({
      type: 'SET_CURRENT_USER',
      payload: {
        firstName,
        lastName,
        email,
        title,
        id,
        command,
      },
    });
  } catch (error) {
    console.log('error', error);
  }
}
function* signupUser(action) {
  try {
    const { email, password } = action.payload;
    const signUp = async () => axiosInstance.post('/auth/signupuser', { ...action.payload });
    yield call(signUp);
    yield put({ type: 'SIGNIN_USER', payload: { email, password } });
  } catch (error) {
    console.log('error', error);
  }
}

function* signupCompany(action) {
  try {
    const { email, password } = action.payload;
    const signUp = async () => axiosInstance.post('/auth/signupcompany', { ...action.payload });
    yield call(signUp);
    yield put({ type: 'SIGNIN_USER', payload: { email, password } });
  } catch (error) {
    console.log('error', error);
  }
}

function* addReport(action) {
  try {
    const formData = new FormData();
    Object.entries(action.payload).forEach(([key, value]) => formData.append(key, value));
    const addReportRequest = async () => axiosInstance.post('/reports', formData);
    yield call(addReportRequest);
    yield put({ type: 'FETCH_USER_REPORTS_START' });
  } catch (error) {
    console.log('error', error);
  }
}

function* editUser(action) {
  try {
    const addNewsRequest = async () => axiosInstance.put(`/users/edit/${action.payload.id}`, { ...action.payload });
    yield call(addNewsRequest);
    yield put({ type: 'SIGNIN_USER', payload: { ...action.payload } });
  } catch (error) {
    console.log('error', error);
  }
}

function* mySaga() {
  yield takeLatest('FETCH_TEAM_MEMBERS_START', fetchReports);
  yield takeLatest('FETCH_USER_REPORTS_START', fetchUserReports);
  yield takeLatest('FETCH_USER_DATA', fetchUserData);
  yield takeLatest('SIGNIN_USER', signin);
  yield takeLatest('SIGNUP_USER', signupUser);
  yield takeLatest('SIGNUP_COMPANY', signupCompany);
  yield takeLatest('ADD_REPORT', addReport);
  yield takeLatest('EDIT_USER', editUser);
}

export default mySaga;