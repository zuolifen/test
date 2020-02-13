import {ADDPERSON} from '../action-types';
export default function (preState=[{name:"Lishi",age:18 }],action) {
    const {type,data} = action;
    let newState;
    switch (type) {
        case ADDPERSON:
            newState = [data,...preState];
            return newState;
    
        default:
            return preState;
    }
 }