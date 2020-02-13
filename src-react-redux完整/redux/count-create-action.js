import {INCREMENT,DECREMENT} from './action-types';
export const createIncrementAction = (value) => ({type: INCREMENT,data:value})
export const createDecrementAction = (value) => ({type: DECREMENT,data:value})
export const createIncrementAsyncAction = (value,time)=>{
   return (dispatch)=>{
      setTimeout(function(){
        dispatch(createIncrementAction(value))
      },time)
   }
}
