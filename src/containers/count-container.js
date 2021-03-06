import Count from '../components/count';
import {connect} from 'react-redux';
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction}from '../redux/action-creators/count-create-action';
export default connect(
    (state)=>({number:state.number}),
    // (dispatch)=>({
    //     increment:value=>dispatch(createIncrementAction(value)),
    //     decrement:value=>dispatch(createDecrementAction(value))
    // })
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction

    }
)(Count)