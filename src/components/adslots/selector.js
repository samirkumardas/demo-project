import { createSelector } from 'reselect';

const slotsSelector = state => state.getIn(['adslots', 'slots']);
const filterSelector = state => state.get('filter');

/* lets define a selector for filter option */
export const getFilteredSlots = createSelector(
  slotsSelector,
  filterSelector,
  (slots, filter) => {
    return slots.filter(slot => {
        let keyword = filter.get('keyword'),
            type = parseInt(filter.get('type'),10),
            format = filter.get('format'),
            regex = new RegExp(keyword,"ig"),
            valid = true;
        if (keyword && (slot.name.search(regex) === -1 && slot.id.toString().search(regex) === -1)) {
           valid = false;
        }
        if (type && slot.type !== type) {
           valid = false;
        }
        if (format && slot.format !== format) {
           valid = false;
        }
        return valid;
    });
  }
);