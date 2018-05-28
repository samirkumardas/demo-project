import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLoader } from '../loader/reducer';
import { slotAddAction, slotEditAction } from './action';
import styles from './buttons.css';

class Buttons extends Component {
    
    constructor(props) {
        super(props);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(event) {
        alert('Oops! Delete API is not available!');
    }

    render() {
        return (
             <div className={styles.action}>
                   <button>Add</button>
                   {this.props.selected.size > 0
                        && <span>
                             <button>Edit</button>
                             <button onClick={this.onDeleteHandler} className={styles.btnDelete}>Delete</button>
                          </span>
                    }
             </div>
        );  
    }
        
}

const mapStateToProps = (state, props) => ({
  selected: state.getIn(['adslots', 'selected'])
});

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Buttons);