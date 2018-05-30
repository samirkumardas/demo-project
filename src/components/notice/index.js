import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './notice.css';
import { removeNotice } from './reducer';

class Notice extends Component {
    
    constructor(props) {
        super(props);
        this.closeNotice = this.closeNotice.bind(this);
    }

    componentDidUpdate() {
        this.clearTimer();
        this.timer = window.setTimeout(()=>{
            this.closeNotice();
        }, 2000);
    }

    closeNotice() {
        this.clearTimer();
        this.props.dispatch(removeNotice());
    }

    clearTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = undefined;
        }
    }

    render() {
        return ( !this.props.notice.message ? '' :
            <div onClick={this.closeNotice} className ={styles.notice}>
                <div className={this.props.notice.type ==='error' ? styles.errorNotice : styles.generalNotice }>
                    {this.props.notice.message}
                    <abbr>x</abbr>
                </div>
            </div>
        );  
    }
        
}

const mapStateToProps = (state) => {
    return {
        notice: state.get('notice').toJS()
    };
};

Notice.propTypes = {
    notice: PropTypes.any,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, dispatch => ({dispatch}))(Notice);