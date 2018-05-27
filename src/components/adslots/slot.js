import React from 'react';
import PropTypes from 'prop-types';

const Slot = ({ slot }) => {
	return (
			<tr>
				<td>{slot.id}</td>
				<td>{slot.name}</td>
				<td>{slot.author}</td>
				<td>{slot.type}</td>
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