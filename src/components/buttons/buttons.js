import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Adsform from '../adslots/adsform';
import styles from './buttons.css';

class Buttons extends Component {
    
    constructor(props) {
        super(props);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
        this.addForm = this.addForm.bind(this);
        this.editForm = this.editForm.bind(this);
        this.state = {
            formVisibility: false,
            id: 0
        };
    }

    onDeleteHandler() {
        alert('Oops! Delete API is not available!');
    }

    cancelForm() {
        this.setState({
            formVisibility: false
        });
    }

    addForm() {
        this.setState({
            formVisibility: true
        });
    }

    editForm() {
        let id = parseInt(this.props.selected.get(0));
        this.setState({
            formVisibility: true,
            id: id
        }); 
    }

    render() {
        return (
             <div className={styles.action}>
                   {this.state.formVisibility && <Adsform id={this.state.id} cancelForm={this.cancelForm}  />}
                   <button onClick={this.addForm}>Add</button>
                   {this.props.selected.size > 0
                        && <span>
                             <button onClick={this.editForm}>Edit</button>
                             <button onClick={this.onDeleteHandler} className={styles.btnDelete}>Delete</button>
                          </span>
                    }
             </div>
        );  
    }
        
}

const mapStateToProps = (state) => ({
  selected: state.getIn(['adslots', 'selected'])
});

Buttons.propTypes = {
    selected: PropTypes.array.isRequired,
    dispatch: PropTypes.object.isRequired
};

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Buttons);