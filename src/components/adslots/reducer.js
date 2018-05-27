import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

export const insertSlot =  createAction('INSERT_SLOT');
export const addSlot =  createAction('ADD_SLOT');
export const editSlot =  createAction('EDIT_SLOT');
export const deleteSlot =  createAction('DELETE_SLOT');
export const fetchSlots =  createAction('FETCH_SLOTS');

const findIndexFromList = (list, key, find) => {
    return list.findIndex(item => item.get(key) === find);
};

const initialState = fromJS({
    slots: []
});

const adslots = createReducer({
    [insertSlot]: (state, payload) => state.update('slots', slots => slots.concat(payload)),
    [addSlot]: (state, payload) => state.update('slots', slots => slots.push(payload)),
    [editSlot]: (state, payload) => state.update('slots', slots => slots.set(findIndexFromList(slots, 'id', payload.id), payload)),
    [deleteSlot]: (state, payload) => state.update('slots', slots => slots.delete(findIndexFromList(slots, 'id', payload))),
}, initialState);

export default adslots;