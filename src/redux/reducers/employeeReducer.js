import { ActionTypes } from "../constants/actions-type"


const initialState={
    employees:[],
}

export const loggedInReducer = (state={},{type,payload})=>{
    // console.log("your are in logged in reducer");

    switch(type){
        case ActionTypes.LOGGED_IN_EMPLOYEE:
            return {...state, ...payload};
        default:
            return state; 
    }
}
export const setEmployeesReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_EMPLOYEES:
            return{...state,employees:payload};
        default:
            return state;
    }
};