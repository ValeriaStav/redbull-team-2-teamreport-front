const initialState = {
    members: [],
    teamReports: []
}

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TEAM_MEMBERS_SUCCESS': {
            const { payload: { data } } = action;
            return {
                ...state,
                members: data
            }
        }
        case 'EDIT_TEAM_MEMBER': {
            const { payload: { firstName, lastName, title, userId } } = action
            return {
                ...state,
                members: state.members.map(member => {
                    if (member.userId === userId) {
                        member.firstName = firstName
                        member.lastName = lastName
                        member.title = title
                    }
                    return member
                })
            }
        }

        case 'FETCH_TEAM_REPORTS_SUCCESS': {
            const { payload: { responseData } } = action

            return {
                ...state,
                teamReports: responseData
            }

        }

        default:
            return state;
    }
}

export default teamReducer;