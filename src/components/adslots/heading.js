import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
    return (
      <thead>  
        <tr>
            <td><input checked={props.isChecked} value="0" onChange={props.onSlotCheckboxChange} type="checkbox" /></td>
            <td>ID</td>
            <td>Name</td>
            <td>Type</td>
            <td>Format</td>
            <td>URL</td>
        </tr>
       </thead>
    );  
};

Heading.propTypes = {
    isChecked: PropTypes.bool,
    onSlotCheckboxChange: PropTypes.func
};

export default Heading;