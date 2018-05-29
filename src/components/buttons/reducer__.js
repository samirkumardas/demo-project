import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';


export const slotAddAction =  createAction('SLOT_ADD_ACTION');
export const slotEditAction =  createAction('SLOT_EDIT_ACTION');
export const slotDetailAction =  createAction('SLOT_DETAIL_ACTION');
export const slotDetailSuccess =  createAction('SLOT_DETAIL_SUCCESS');
export const slotDetailFailed =  createAction('SLOT_DETAIL_FAILED');


const initialState = fromJS({
        formData: {}
    });

const buttons = createReducer({
    [slotDetailSuccess]: (state, payload) => state.set('formData', payload),
    [slotDetailFailed]: (state, payload) => state.set('formData', {})
}, initialState);

export default buttons; 