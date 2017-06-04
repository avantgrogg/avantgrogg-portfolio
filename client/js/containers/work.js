import { connect } from 'react-redux';
import { Work } from '../components/work';
import { selectJobAction, removeSelectedJobAction } from '../actions/jobActions';

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectJob: (event, job) => {
            event.preventDefault();
            dispatch(selectJobAction(job));
        },
        removeJob: (event) => {
            event.preventDefault();
            dispatch(removeSelectedJobAction())
        }
    };
};

export const workContainer = connect(mapStateToProps, mapDispatchToProps)(Work);
