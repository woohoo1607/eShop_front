import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "../reducers/userReducer"
import adminPanelReducer from "../reducers/adminPanelReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    user: userReducer,
    adminPanel: adminPanelReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;