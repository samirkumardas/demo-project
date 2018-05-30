import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/header';
import Toolbar from '../toolbar/toolbar';
import { fetchSlotsReq } from '../adslots/reducer';
import { toggleLoader } from '../loader/reducer';
import Adslots from '../adslots/adslots';
import Loader from '../loader/loader';
import styles from './app.css';

class App extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSlotsReq());
        this.props.dispatch(toggleLoader());
    }

    render() {
        return (
            <div className={styles.app}>
                <Loader showLoader = {this.props.loading} />
                <Header />
                <Toolbar />
                <Adslots />
             </div>
        );  
    }
        
}

const mapStateToProps = (state) => {
    return {
        loading: state.get('loader')
    };
};

App.propTypes = {
    loading: PropTypes.boolean,
    dispatch: PropTypes.object.isRequired
};

export default connect(mapStateToProps, dispatch => ({dispatch}))(App);