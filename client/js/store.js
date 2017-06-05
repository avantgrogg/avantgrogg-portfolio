import { app } from './reducers/reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import jobs from '../jobs.json';

let initialState = {
    jobs:jobs.jobs,
    selectedJobs: {}
};

export function generateStore() {
    let store = createStore(app, initialState, applyMiddleware(logger), initialState);
    return store;
}