import { takeLatest, call, put } from 'redux-saga/effects';
import jwt_decode from "jwt-decode";


import axiosInstance from './axios';

function* fetchPreviousReports() {
  try {
    const getReports = async () => axiosInstance.get('/api/Leader/previousperiod');
    const response = yield call(getReports);
    const responseData = response.data;
    yield put({ type: 'FETCH_TEAM_REPORTS_SUCCESS', payload: { responseData } });
  } catch (error) {
    console.log('error', error);
  }
}

function* fetchUserReports(action) {
  try {
    const response = yield call(axiosInstance.get, `/api/User/reports?UserId=${action.payload.userId}`);
    const responseData = response.data;
    yield put({ type: 'FETCH_USER_REPORTS_SUCCESS', payload: { data: responseData, userId: action.payload.userId } });
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
    const { navigate } = action.payload;
    const signIn = async () => axiosInstance.post('api/Authentication/login', { ...action.payload });
    const response = yield call(signIn);
    const responseData = response.data;
    const decodedToken = jwt_decode(responseData);
    const {
      firstName,
      lastName,
      email,
      title,
      id,
      command,
      userId,
    } = decodedToken;
    localStorage.setItem('userToken', responseData);
    yield put({ type: 'SIGNIN_USER_SUCCESS' });
    yield put({
      type: 'SET_CURRENT_USER',
      payload: {
        userId,
        firstName,
        lastName,
        email,
        title,
        id,
        command,
      },
    });
    navigate("/");
  } catch (error) {
    console.log('error', error);
  }
}
function* signupUser(action) {
  try {
    const { email, password, navigate } = action.payload;
    const signUp = async () => axiosInstance.post('api/Authentication/registration', { ...action.payload });
    yield call(signUp);
    yield put({ type: 'SIGNIN_USER', payload: { password, email } });
    navigate("/");
  } catch (error) {
    console.log('error', error);
  }
}

function* signupCompany(action) {
  try {
    const { teamName, navigate, userId } = action.payload;
    const stringName = teamName.toString()
    const signUpCompany = async () => axiosInstance.post('api/Team/add', `${stringName}`, { headers: { 'Content-Type': 'application/json' } });
    const request = yield call(signUpCompany);
    yield put({ type: "EDIT_USER", payload: { teamId: request.data, userId } })
    yield put({ type: "SET_CURRENT_COMPANY", payload: { company: request.data } });
    navigate('/my-company')
  } catch (error) {
    console.log('error', error);
  }
}

function* addReport(action) {
  try {
    const { navigate } = action.payload;
    const addReportRequest = async () => axiosInstance.post('api/Reports/add', { ...action.payload });
    yield call(addReportRequest);
    navigate("/reports")
  } catch (error) {
    console.log('error', error);
  }
}

function* editUser(action) {
  try {
    const { isOtherMember } = action.payload
    const editRequest = async () => axiosInstance.post(`api/User/edit/`, { ...action.payload });
    const response = yield call(editRequest);
    const responseData = response.data;
    if (isOtherMember) {
      yield put({ type: 'EDIT_TEAM_MEMBER', payload: { ...action.payload } });
    } else {
      const parsedPayloadToken = jwt_decode(responseData)
      localStorage.setItem('userToken', responseData)
      yield put({ type: 'SET_CURRENT_USER', payload: { ...parsedPayloadToken } });
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* sendInvitation(action) {
  try {
    const { firstName, lastName, email, teamId } = action.payload;
    const link = `${window.location.origin}/team-member-registration?firstName=${firstName}&lastName=${lastName}&email=${email}&teamId=${teamId}`
    const invitationRequest = async () => axiosInstance.post(`api/Email`, { ...action.payload, link });
    yield call(invitationRequest);
  } catch (error) {
    console.log('error', error);
  }
}

function* getAllTeamMembers(action) {
  try {
    const getMembersRequest = async () => axiosInstance.get(`api/User/all?TeamId=${action.payload.teamId}`);
    const { data: responsedata } = yield call(getMembersRequest);
    const fixedData = responsedata.map(item => {
      const [firstName, lastName] = item.userName.split(' ')
      return {
        ...item,
        firstName,
        lastName,
      }
    })
    yield put({ type: 'FETCH_TEAM_MEMBERS_SUCCESS', payload: { data: fixedData } })
  } catch (error) {
    console.log('error', error);
  }
}

function* fetchCompanyData(action) {
  try {
    const response = yield call(axiosInstance.get, `api/Team/?TeamId=${action.payload}`);
    const responseData = response.data;
    yield put({ type: 'FETCH_COMPANY_DATA_SUCCESS', payload: { data: responseData } });
  } catch (error) {
    console.log('error', error);
  }
}

function* editCompany(action) {
  try {
    const editRequest = async () => axiosInstance.post(`api/Team/edit/`, { ...action.payload });
    const response = yield call(editRequest);
    yield put({ type: 'FETCH_COMPANY_DATA_SUCCESS', payload: { data: { teamName: action.payload.teamName } } });
  } catch (error) {

  }
}

function* teamExtendedReports(action) {
  try {
    const { reportType, id } = action.payload
    let response = {}
    switch (reportType) {
      case 'overall': {
        response = yield call(axiosInstance.get, `/api/Leader/olderreports?id=${id}`)
        break
      }

      case 'morale': {
        response = yield call(axiosInstance.get, `/api/Leader/olderreports/morale?id=${id}`)
        break
      }

      case 'stress': {
        response = yield call(axiosInstance.get, `/api/Leader/olderreports/stress?id=${id}`)
        break
      }

      case 'workload': {
        response = yield call(axiosInstance.get, `/api/Leader/olderreports/workload?id=${id}`)
        break
      }

      default:
        break
    }
    const responseData = response.data;
    yield put({ type: 'FETCH_TEAM_REPORTS_SUCCESS', payload: { responseData } });
  } catch (error) {
    console.log('error', error);
  }
}

function* teamImmediateReports(action) {
  let response = {}
  try {
    const { reportType, id } = action.payload

    switch (reportType) {
      case 'previous': {
        response = yield call(axiosInstance.get, `/api/Leader/previousperiod?id=${id}`)
        break
      }

      case 'current': {
        response = yield call(axiosInstance.get, `/api/Leader/curentperiod?id=${id}`)
        break
      }
      default: return
    }
    const responseData = response.data;
    yield put({ type: 'FETCH_TEAM_REPORTS_SUCCESS', payload: { responseData } });

  } catch (error) {
    console.log(error)
  }
}


function* mySaga() {
  yield takeLatest('FETCH_TEAM_MEMBERS_START', fetchPreviousReports);
  yield takeLatest('FETCH_USER_REPORTS_START', fetchUserReports);
  yield takeLatest('FETCH_USER_DATA', fetchUserData);
  yield takeLatest('SIGNIN_USER', signin);
  yield takeLatest('SIGNUP_USER', signupUser);
  yield takeLatest('SIGNUP_COMPANY', signupCompany);
  yield takeLatest('ADD_REPORT', addReport);
  yield takeLatest('EDIT_USER', editUser);
  yield takeLatest('SEND_INVITATION', sendInvitation);
  yield takeLatest('FETCH_TEAM_MEMBERS', getAllTeamMembers);
  yield takeLatest('FETCH_COMPANY_DATA', fetchCompanyData);
  yield takeLatest('EDIT_COMPANY_DATA', editCompany);
  yield takeLatest('FETCH_EXTENDED_TEAM_REPORTS', teamExtendedReports);
  yield takeLatest('FETCH_IMMEDIATE_TEAM_REPORTS', teamImmediateReports);

}

export default mySaga;