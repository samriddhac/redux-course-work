import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
	if(!this.props.book) {
		return (
			<div>Please select a book to start.</div>
		);
	}

		return (
			<div>
				<h2>Details for </h2>
				<div> Title : {this.props.book.title}</div>
			 </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);