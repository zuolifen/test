import Count from '../components/count';
import {connect} from 'react-redux';
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction}from '../redux/count-create-action'
export default connect(
    (state)=>({number:state}),
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