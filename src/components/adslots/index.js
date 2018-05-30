import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSelectedSlot } from './reducer';
import { getFilteredSlots } from './selector';
import Heading from './heading';
import SlotList from './slotlist';
import styles from './adslots.css';

class Adslots extends Component {
    
    constructor(props) {
        super(props);
        this.onSlotCheckboxChange = this.onSlotCheckboxChange.bind(this);
    }

    onSlotCheckboxChange(event) {
        this.props.dispatch(updateSelectedSlot([event.target.value, this.props.slots]));
    }

    render() {
        return (
            <div>
               <table className={styles.slotGrid}>
                <Heading
                    onSlotCheckboxChange={this.onSlotCheckboxChange}
                    isChecked = {this.props.slots.size <= this.props.selected.size} 
                 />
                 <SlotList
                    slots={this.props.slots}
                    selected={this.props.selected}
                    onSlotCheckboxChange={this.onSlotCheckboxChange} />
               </table>
             </div>
        );  
    }
    
}

const mapStateToProps = (state, props) => ({
  slots: getFilteredSlots(state, props),
  selected: state.getIn(['adslots', 'selected'])
});

Adslots.propTypes = {
    slots: PropTypes.any.isRequired,
    selected: PropTypes.any,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Adslots);