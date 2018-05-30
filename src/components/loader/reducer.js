import { createAction, createReducer } from 'redux-act';

export const toggleLoader =  createAction('TOGGLE_LOADER');

const initialState = false;
const loader = createReducer({
    [toggleLoader]: (state) => !state
}, initialState);

export default loader;