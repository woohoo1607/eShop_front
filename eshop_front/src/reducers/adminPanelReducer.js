import {userAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_USERS_COUNT = "SET_USERS_COUNT";

let initialState = {
    usersData: [],
    usersCount: null

};

const adminPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
        {
            return {
                ...state,
                usersData: [...action.usersData]
            };
        }
        case SET_USERS_COUNT:
        {
            return {
                ...state,
                usersCount: action.count
            };
        }
        default:
            return state;
    }
};

export const setUsersData = (users) =>
    ({type: SET_USERS_DATA, usersData: users});
export const setUsersCount = (count) =>
    ({type: SET_USERS_COUNT, count: count});

export const getUsersData = () => (dispatch) => {
    userAPI.getUsers()
        .then(response => {
            if (response.status === 1) {
                dispatch(setUsersData(response.result));
                dispatch(setUsersCount(response.count));
            }
        });
};

export default adminPanelReducer;