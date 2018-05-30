import React from 'react';
import PropTypes from 'prop-types';
import { getSlotTypeName } from 'utils/helper';

const Slot = ({ slot, isChecked, onSlotCheckboxChange }) => {
    return (
            <tr>
                <td><input checked={isChecked} value={slot.id} onChange={onSlotCheckboxChange} type="checkbox" /></td>
                <td>{slot.id}</td>
                <td>{slot.name}</td>
                <td>{getSlotTypeName(slot.type) }</td>
                <td>{slot.format}</td>
            </tr>
    );  
};

Slot.propTypes = {
    slot: PropTypes.object.isRequired,
    isChecked: PropTypes.boolean,
    onSlotCheckboxChange: PropTypes.func.isRequired
}

export default Slot;