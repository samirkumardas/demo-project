import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

export const insertSlot =  createAction('INSERT_SLOT');
export const addSlot =  createAction('ADD_SLOT');
export const editSlot =  createAction('EDIT_SLOT');
export const deleteSlot =  createAction('DELETE_SLOT');
export const fetchSlots =  createAction('FETCH_SLOTS');
export const updateSelectedSlot =  createAction('UPDATE_SELECTED_SLOT');
export const clearSelection =  createAction('CLEAR_SELECTION');

const findIndexFromList = (list, key, find) => {
    return list.findIndex(item => item.get(key) === find);
};

const getAllSlodIds = (slots) => {
     const slotsId = [];
     slots.forEach(slot => slotsId.push(slot.id));
     return slotsId;
};

const onSelectionChange = (state, payload) => {
    let selected = state.get('selected'),
        index,
        [id,filteredSlots] = payload;
    
    id = parseInt(id, 10);
    /* checkbox was "CheckALl" one */
    if (id === 0) {
        selected = (filteredSlots.size === selected.size) ?
            selected.clear() : selected.clear().concat(getAllSlodIds(filteredSlots));
    } else {
        index= selected.findIndex(item => item === id);
        if (index === -1) {
            selected = selected.push(id);
        } else {
            selected = selected.delete(index);
        }
    }

    return state.set('selected', selected);
};

const initialState = fromJS({
    slots: [],
    selected: []
});

const adslots = createReducer({
    [insertSlot]: (state, payload) => state.update('slots', slots => slots.concat(payload)),
    [addSlot]: (state, payload) => state.update('slots', slots => slots.push(payload)),
    [editSlot]: (state, payload) => state.update('slots', slots => slots.set(findIndexFromList(slots, 'id', payload.id), payload)),
    [deleteSlot]: (state, payload) => state.update('slots', slots => slots.delete(findIndexFromList(slots, 'id', payload))),
    [clearSelection]: (state, payload) => state.set('selected').clear(),
    [updateSelectedSlot]: (state, payload) => onSelectionChange(state, payload),
}, initialState);

export default adslots;