import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSlot } from './reducer';
import { getFilteredSlots } from './selector';
import Heading from './heading';
import SlotList from './slotlist';
import styles from './adslots.css';

class Adslots extends Component {
    
    constructor(props) {
        super(props);
        this.onCheckboxMark = this.onCheckboxMark.bind(this);
    }

    onCheckboxMark(event) {

    }

    /*
    componentDidUpdate() {
        if (this.props.formVisibitly) {
            this.nodeTitle.value = this.props.formData.title;
            this.nodeAuthor.value = this.props.formData.author;
            this.nodeStatus.value = this.props.formData.status;
            this.nodeId.value = this.props.formData.id; 
        }
    }   

    saveBook() {
        let title = this.nodeTitle.value,
            author = this.nodeAuthor.value,
            status = this.nodeStatus.value,
            id = parseInt(this.nodeId.value);

         this.props.saveBook({ title, author, status, id });
    } */

    render() {
        return (
            <div>
               <table className={styles.slotGrid}>
                <Heading onCheckboxMark={this.onCheckboxMark} />
                 <SlotList
                    slots={this.props.slots} />
               </table>
             </div>
        );  
    }
    
}

const mapStateToProps = (state, props) => ({
  slots: getFilteredSlots(state, props)
});

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Adslots);