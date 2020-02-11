import Count from '../components/count';
import {connect} from 'react-redux';
export default connect(
    ()=>({a:1}),
    ()=>({})
)(Count)