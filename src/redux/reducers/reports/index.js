const initialState = {
  reports: [],
  loading: false,
  byId: {}
}
 const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAM_REPORTS_START': {
      return {
        ...state,
        loading: true,
      }
    }

    case 'FETCH_TEAM_REPORTS_SUCCESS': {
      const { payload } = action;
      return {
        ...state,
        reports: payload,
        loading: false,
      };
    }

    case 'FETCH_USER_REPORTS_START': {
      return {
        ...state,
        loading: true,
      }
    }

    case 'FETCH_USER_REPORTS_SUCCESS': {
      const { payload: { data, userId } } = action;
      return {
        ...state,
        loading: false,
        byId: {
          ...state.byId,
          [userId]: {
            reports: data
          },
        },
      };
    }

    default:
      return state;
  }
}
export default reportsReducer