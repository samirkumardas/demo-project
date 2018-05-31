import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/';
import Toolbar from '../toolbar/';
import { fetchSlotsReq } from '../adslots/reducer';
import Adslots from '../adslots/';
import Notice from '../notice/';
import Loader from '../loader/';
import styles from './app.css';

class App extends PureComponent {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSlotsReq());
    }

    render() {
        return (
            <div className={styles.app}>
                <Notice />
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
    loading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, dispatch => ({dispatch}))(App);