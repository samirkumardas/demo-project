import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

export const toggleLoader =  createAction('TOGGLE_LOADER');

const initialState = false;

const loader = createReducer({
    [toggleLoader]: (state) => !state
}, initialState);

export default loader;