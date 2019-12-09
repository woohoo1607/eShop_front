import {userAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    users: {
        usersData: [],
        usersCount: 0,
        currentPage: 1,
        isFetching: false
    }
};

const adminPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
        {
            return {
                ...state,
                users: {
                    usersData: [...action.usersData],
                    usersCount: state.users.usersCount,
                    currentPage: state.users.currentPage,
                    isFetching: state.users.isFetching
                }
            };
        }
        case SET_USERS_COUNT:
        {
            return {
                ...state,
                users: {
                    usersData: state.users.usersData,
                    usersCount: action.count,
                    currentPage: state.users.currentPage,
                    isFetching: state.users.isFetching
                }
            };
        }
        case TOGGLE_IS_FETCHING:
        {
            return {
                ...state,
                users: {
                    usersData: state.users.usersData,
                    usersCount: state.users.usersCount,
                    currentPage: state.users.currentPage,
                    isFetching: action.isFetching
                }
            };
        }
        case SET_CURRENT_PAGE:
        {
            return {
                ...state,
                users: {
                    usersData: state.users.usersData,
                    usersCount: state.users.usersCount,
                    currentPage: action.currentPage,
                    isFetching: state.isFetching
                }
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
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});

export const getUsersData = (currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers()
        .then(response => {
            if (response.status === 1) {
                dispatch(toggleIsFetching(false));
                dispatch(setUsersData(response.result));
                dispatch(setUsersCount(response.count));
            }
        });
};

export default adminPanelReducer;