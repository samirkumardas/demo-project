import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';


export const slotAddAction =  createAction('SLOT_ADD_ACTION');
export const slotEditAction =  createAction('SLOT_EDIT_ACTION');

/*
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

export default filter; */