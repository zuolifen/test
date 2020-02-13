import Person from '../components/person';
import {connect} from 'react-redux';
import {createAddPersonAction} from '../redux/action-creators/person-create-action';

export default connect(
    (state)=>({
        persons:state.persons,
        number:state.number
    }),
    {addPerson:createAddPersonAction}
)(Person);
