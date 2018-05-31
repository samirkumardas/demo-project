import React from 'react';
import PropTypes from 'prop-types';
import Slot from './slot';

const SlotList = ({slots, selected, onSlotCheckboxChange, loading}) => { 

    return (
        <tbody id="container">
           {!slots.size && !loading && <tr><td align="center" colSpan="6">There is no data to show.</td></tr>}
           {
             slots.map(slot => {
                return (
                    <Slot
                        key={slot.id}
                        slot = {slot}
                        isChecked={selected.findIndex(item => item === slot.id) !== -1}
                        onSlotCheckboxChange={onSlotCheckboxChange} />
                );
            })
           }
        </tbody>
    );  
        
}


SlotList.propTypes = {
    slots: PropTypes.any.isRequired,
    selected: PropTypes.any.isRequired,
    onSlotCheckboxChange: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default SlotList;