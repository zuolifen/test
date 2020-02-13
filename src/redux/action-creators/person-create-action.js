import {ADDPERSON} from '../action-types';
export const createAddPersonAction = (personObj)=>({type:ADDPERSON,data:personObj});
