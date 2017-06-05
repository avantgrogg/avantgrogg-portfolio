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
            document.body.classList.add('no-scroll');
            dispatch(selectJobAction(job));
        },
        removeJob: (event) => {
            event.preventDefault();
            let body = document.getElementsByTagName('body');
            document.body.classList.remove('no-scroll');
            dispatch(removeSelectedJobAction())
        }
    };
};

export const workContainer = connect(mapStateToProps, mapDispatchToProps)(Work);
