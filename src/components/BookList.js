import React, { Component } from "react"
import BookShelf from "./BookShelf"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class BookList extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render() {
    const { books, updateBook } = this.props;

    const listBooksByShelfName = (name) => books.filter((item) => {
      return item.shelf === name
    })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={listBooksByShelfName("currentlyReading")} updateBook={updateBook} />
            <BookShelf title="Want to Read" books={listBooksByShelfName("wantToRead")} updateBook={updateBook} />
            <BookShelf title="Read" books={listBooksByShelfName("read")} updateBook={updateBook} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className='add-contact'> Add a book </Link>
        </div>
      </div>
    )
  }
}
