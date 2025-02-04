import React, { Component } from "react";
import BookShelfItem from "./BookShelfItem";
import PropTypes from 'prop-types';

export default class BookShelf extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render() {
    const { title, books, updateBook } = this.props;

    return (
      <>
        {books.length > 0 && (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => (
                  <BookShelfItem
                    book={book}
                    updateBook={updateBook}
                    key={book.id}
                  />
                ))}
              </ol>
            </div>
          </div>
        )}
      </>
    );
  }
}
