import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './header/header';
import Filter from './filter/filter';
import { fetchSlots } from './adslots/reducer';
import { toggleLoader } from './loader/reducer';
import Adslots from './adslots/adslots';
import Loader from './loader/loader';
import styles from './app.css';
//import Footer from 'components/Footer';
//import { addBook, editBook, deleteBook, fetchBookList, changeFilterType } from 'actions/book';


class App extends Component {
	
	constructor(props) {
	    super(props);
        /*
	    this.state = {
	    	formVisibitly:false
	    }; */
	    //this.showForm = this.showForm.bind(this);
	    //this.saveBook = this.saveBook.bind(this);
	    //this.editBook = this.editBook.bind(this);
    }

    
    componentDidMount() {
    	this.props.dispatch(fetchSlots());
        this.props.dispatch(toggleLoader());
    }

    /*
    showForm() {
    	this.setState({
    		formVisibitly: !this.state.formVisibitly
    	});
    }

    saveBook(book) {
    	if (book.id) {
    		this.props.editBook(book.title, book.author, book.status, book.id);
    	} else {
	    	this.props.addBook(book.title, book.author, book.status);
    	}

    	this.setState({
	    	formData: {
		    	title: '',
		    	author: '',
		    	status: 'READ',
		    	id: ''
	    	}
	    });
    }

    editBook(book) {
    	this.setState({
    		formVisibitly: true,
    		formData: book
    	});
    } */

	render() {
		return (
            <div>
                <Loader showLoader = {this.props.loading} />
				<Header />
                <Filter />
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

/*
const mapDispatchToProps = (dispatch) => {
	return {
		fetchSlots: (filter) => dispatch(changeFilterType(filter)),
		addBook: (title, author, status) => dispatch(addBook(title, author, status)),
		editBook: (title, author, status, id) => dispatch(editBook(title, author, status, id)),
		deleteBook: (id) => dispatch(deleteBook(id)),
		fetchBookList: () => dispatch(fetchBookList())
	};
}; */

/*
App.propTypes = {
	books: PropTypes.array.isRequired,
	filterType: PropTypes.string.isRequired,
	changeFilterType: PropTypes.func,
	addBook: PropTypes.func,
	editBook: PropTypes.func,
	deleteBook: PropTypes.func,
	fetchBookList: PropTypes.func
}; */

export default connect(mapStateToProps, dispatch => ({dispatch}))(App);