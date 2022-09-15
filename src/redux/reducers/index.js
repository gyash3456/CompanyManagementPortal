import { combineReducers } from "redux";
import { setEmployeesReducer,loggedInReducer } from "./employeeReducer";

const reducers=combineReducers({
    allEmployees:setEmployeesReducer,
    employee:loggedInReducer,

});
export default reducers;