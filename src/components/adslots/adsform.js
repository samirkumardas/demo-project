import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './adsform.css';

class Adsform extends Component {
	
	constructor(props) {
		super(props);
		this.saveBook = this.saveBook.bind(this);
	}

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
	}

	render() {
		return (
			<div className={styles.adsForm}>
			  <ul>
			    <li>
			      <label>Name</label>
			       <input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" />
			    </li>
			    <li>
			      <label>Format</label>
			       <input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" />
			    </li>
			    <li>
			      <label>URL</label>
			       <input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" />
			    </li>
			    <li>
			      <label>Price</label>
			       <input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" />
			    </li>
			    <li>
			      <label>Type</label>
			       <input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" />
			    </li>
			    <li>
			      <label>Fallback</label>
			       <input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" />
			    </li>
			  </ul>
			</div>
		);	
	}
	
}

/*
Adsform.propTypes = {
	formVisibitly: PropTypes.bool.isRequired,
	formData: PropTypes.object,
	saveBook: PropTypes.func.isRequired
}; */

export default Adsform;