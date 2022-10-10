import jwt from 'jsonwebtoken';

const localStorageToken = localStorage.getItem('userToken');

const parsedToken = localStorageToken !== null ? jwt.decode(localStorageToken) : {};

const {
  id: tokenId,
  firstName: tokenFirstName,
  lastName: tokenLastName,
  title: tokenTitle,
  email: tokenEmail,
  command: tokenCommand,
} = parsedToken;

const initialState = {
  currentUserId: tokenId || '',
  currentUserFirstName: tokenFirstName || '',
  currentUserLastName: tokenLastName || '',
  currentUserEmail: tokenEmail || '',
  currentUserTitle: tokenTitle || '',
  currentUserCommand: tokenCommand || '',
  isLoggedIn: localStorageToken !== null,
  token: localStorageToken !== null ? parsedToken : null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER_SUCCESS': {
      return {
        ...state,
        isLoggedIn: true
      }
    }

    case 'SET_CURRENT_USER': {
      const {
        firstName, lastName, id, email, title, command,
      } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        currentUserFirstName: firstName,
        currentUserLastName: lastName,
        currentUserEmail: email,
        currentUserId: id,
        currentUserTitle: title,
        currentUserCommand: command
      };
    }

    case 'LOGOUT_USER': {
      return {
        ...action.payload,
      }
    }

    default:
      return state;
  }
}

export default usersReducer
