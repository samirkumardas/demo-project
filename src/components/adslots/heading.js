import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
    return (
      <thead>  
        <tr>
            <td><input onChange={props.onCheckboxMark} type="checkbox" /></td>
            <td>ID</td>
            <td>Name</td>
            <td>Type</td>
            <td>Format</td>
        </tr>
       </thead>
    );  
};

export default Heading;