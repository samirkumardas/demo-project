import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Adsform from '../adslots/adsform';
import { slotDetailSuccess, showSlotForm, hideSlotForm } from '../adslots/reducer';
import styles from './buttons.css';

class Buttons extends PureComponent {
    
    constructor(props) {
        super(props);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
        this.showForm = this.showForm.bind(this);
        this.editSlotId = 0;
    }

    onDeleteHandler() {
        alert('Oops! Delete API is not available!');
    }

    cancelForm() {
        this.props.dispatch(hideSlotForm());
    }

    showForm(event) {
        this.editSlotId = event.target.name == 'edit' ? this.props.selected.last() : 0;
        this.props.dispatch(slotDetailSuccess({})); // let make previous data blank
        this.props.dispatch(showSlotForm());
    }

    render() {
        return (
             <div className={styles.action}>
                   {this.props.showForm && <Adsform id={this.editSlotId} cancelForm={this.cancelForm}  />}
                   <button name="add" onClick={this.showForm}>Add</button>
                   {this.props.selected.size > 0
                        && <span>
                             <button name="edit" onClick={this.showForm}>Edit</button>
                             <button onClick={this.onDeleteHandler} className={styles.btnDelete}>Delete</button>
                          </span>
                    }
             </div>
        );  
    }
        
}

const mapStateToProps = (state) => ({
  selected: state.getIn(['adslots', 'selected']),
  showForm: state.getIn(['adslots', 'showForm'])
});

Buttons.propTypes = {
    selected: PropTypes.object.isRequired,
    showForm: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Buttons);