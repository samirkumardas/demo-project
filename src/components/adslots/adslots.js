import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { fetchSlots } from './components/Adslots/reducers';
import { getFilteredSlots } from './selector';
import SlotList from './slotlist';

class Adslots extends Component {
    
    constructor(props) {
        super(props);
        //this.saveBook = this.saveBook.bind(this);
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
               <table>
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