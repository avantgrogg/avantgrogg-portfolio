export const SELECT_JOB_ACTION = 'SELECT_JOB_ACTION';
export const REMOVE_SELECTED_JOB_ACTION = 'REMOVE_SELECTED_JOB_ACTION';

export function selectJobAction(job) {
    return {
        type: SELECT_JOB_ACTION,
        payload: job
    }
}

export function removeSelectedJobAction() {
    return {
        type: REMOVE_SELECTED_JOB_ACTION
    }
}