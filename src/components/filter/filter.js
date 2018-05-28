import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSlotTypes } from 'utils/helper';
import { updateFilterKeyword, updateFilterType, updateFilterFormat } from './reducer';
import styles from './filter.css';

class Filter extends Component {
    
    constructor(props) {
        super(props);
        this.slotTypes = getSlotTypes();
        this.onKeywordChange = this.onKeywordChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onFormatChange = this.onFormatChange.bind(this);
    }

    onTypeChange(event) {
        this.props.dispatch(updateFilterType(event.target.value));
    }

    onKeywordChange(event) { // TODO bounce 
        this.props.dispatch(updateFilterKeyword(event.target.value));
    }

    onFormatChange(event) { // selector for format dropdown
        this.props.dispatch(updateFilterFormat(event.target.value));
    }

    render() {
        return (
            <div className={styles.filterBar}>
                <div className={styles.keyword}>
                  <input type="text" width="120" onChange={this.onKeywordChange} placeholder="Filter Adslots" />
                </div>
                <div className={styles.drowdown}>
                   <select onChange={this.onTypeChange}>
                     <option value="">Any Type</option>
                     { Object.keys(this.slotTypes).map(key => {
                            return (
                                <option key={key} value={key}>{this.slotTypes[key]}</option>
                            )})
                     }
                   </select>
                </div>
            </div>
        );  
    }
}

export default connect(dispatch => ({dispatch}))(Filter);