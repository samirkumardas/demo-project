import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

export const updateFilterKeyword =  createAction('UPDATE_FILTER_KEYWORD');
export const updateFilterType =  createAction('UPDATE_FILTER_TYPE');
export const updateFilterFormat =  createAction('UPDATE_FILTER_FORMAT');

const initialState = fromJS({
        keyword: '',
        type: '',
        format: ''
    });

const filter = createReducer({
    [updateFilterKeyword]: (state, payload) => state.set('keyword', payload),
    [updateFilterType]: (state, payload) => state.set('type', payload),
    [updateFilterFormat]: (state, payload) => state.set('format', payload)
}, initialState);

export default filter;