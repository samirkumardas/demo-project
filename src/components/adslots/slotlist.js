import React from 'react';
import PropTypes from 'prop-types';
import Slot from './slot';

const SlotList = ({slots, selected, onSlotCheckboxChange}) => {	

	return (
		<tbody id="container">
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

/*
SlotList.propTypes = {
	books: PropTypes.array.isRequired,
	editBook: PropTypes.func.isRequired,
	deleteBook: PropTypes.func.isRequired
}; */

export default SlotList;