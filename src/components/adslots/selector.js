import { createSelector } from 'reselect';

const slotsSelector = state => state.getIn(['adslots', 'slots']);
const filterSelector = state => state.get('filter');

export const getFilteredSlots = createSelector(
  slotsSelector,
  filterSelector,
  (slots, filter) => {
    return slots.filter(slot => {
        let valid = true;
        if (filter.keyword && slot.get('name').search(filter.keyword) === -1) {
           valid = false;
        }
        if (filter.type && slot.get('type') !== filter.type) {
           valid = false;
        }
        if (filter.format && slot.get('format') !== filter.format) {
           valid = false;
        }
        return valid;
    });
  }
);