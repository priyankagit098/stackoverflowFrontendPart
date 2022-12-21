import { combineReducers } from "redux";
import authReducer from "./auth";
import currentReducer from './currentReducer'
import questionsReducer from "./questions.js";
import usersReducer from "./users";
const reducers = combineReducers ({
    authReducer, currentReducer, questionsReducer, usersReducer
})

export default reducers