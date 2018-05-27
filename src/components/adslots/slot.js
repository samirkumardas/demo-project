import React from 'react';
import PropTypes from 'prop-types';
import { getSlotTypeName } from 'utils/helper';

const Slot = ({ slot }) => {
	return (
			<tr>
			    <td><input value={slot.id} type="checkbox" /></td>
				<td>{slot.id}</td>
				<td>{slot.name}</td>
				<td>{getSlotTypeName(slot.type) }</td>
				<td>{slot.format}</td>
			</tr>
	);	
};

/*
Slot.propTypes = {
	book: PropTypes.object.isRequired,
	editBook: PropTypes.func.isRequired,
	deleteBook: PropTypes.func.isRequired
} */

export default Slot;