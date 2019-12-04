import {userAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    login: null,
    firstname: null,
    surname: null,
    phonenumber: null,
    email: null,
    isAdmin: false,
    isAuth: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        {
            return {
                ...state,
                ...action.userData
            };
        }
        default:
            return state;
    }
};

export const setUserData = (id, login, firstname, surname, phonenumber, email, isAdmin, isAuth) =>
    ({type: SET_USER_DATA, userData: {id, login, firstname, surname, phonenumber, email, isAdmin, isAuth}});

export const getUserData = () => (dispatch) => {
    userAPI.getUser()
        .then(response => {
            if (response.status ===1) {
                let {id, login, firstname, surname, phonenumber, email} = response.result[0];
                dispatch(setUserData(id, login, firstname, surname, phonenumber, email, true, true));
            }
        });
};

export default userReducer;