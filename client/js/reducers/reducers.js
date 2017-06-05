import { SELECT_JOB_ACTION, REMOVE_SELECTED_JOB_ACTION } from '../actions/jobActions';

export function app (state = {}, action){
    return {
        jobs: jobs(state.jobs, action),
        selectedJob: selectedJob(state.selectedJob, action)
    };
}

export function jobs(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export function selectedJob(state = {}, action) {
    switch(action.type) {
        case SELECT_JOB_ACTION:
            return action.payload;
        case REMOVE_SELECTED_JOB_ACTION:
            return {};
        default:
            return state;
    }
}