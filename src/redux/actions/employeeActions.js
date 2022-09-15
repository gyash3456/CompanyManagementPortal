import {ActionTypes} from '../constants/actions-type';
export const setEmployees =(employees)=>{
    return{
        type:ActionTypes.SET_EMPLOYEES,
        payload:employees,
    }
};

export const loggedInEmployee=(employee)=>{
    console.log("you are in logged in employee action");
    return{
        type:ActionTypes.LOGGED_IN_EMPLOYEE,
        payload:employee,
    }

};
