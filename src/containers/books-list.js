import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';
class BooksList extends Component {

	renderList() {
		return this.props.books.map((book)=>{
				return (
					<li 
					key={book.title} 
					onClick={() => { this.props.selectBook(book)}}
					className="list-group-item">
						{book.title}
					</li>
				);
			});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
			{this.renderList()}
			</ul>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(appState) {
	return {
		books: appState.books
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);