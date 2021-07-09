import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookShelfItem from "../components/BookShelfItem";
import PropTypes from 'prop-types';


export default class SearchBar extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired,
    }

    state = {
        searchQuery: "",
        searchResults: [],
    };

    submitSearchQuery(query) {
        //set query state
        this.setState(() => ({
            searchQuery: query,
        }));

        //make sure that we have at-least 1 character in the search value before sending the query
        if (query.length >= 1 && this.state.searchQuery) {
            BooksAPI.search(this.state.searchQuery)
                .then((searchResults) => {

                    let computerSearchResults = [];
                    //go through the results and add a shelf to items that already exist in the books props
                    const currentBooksInShelf = this.props.books;
                    computerSearchResults = searchResults && searchResults.map((book) => {
                        let bookInShelf = currentBooksInShelf.find((bookInShelf) => bookInShelf.id === book.id)
                        book.shelf = bookInShelf ? bookInShelf.shelf : "none"
                        return book
                    })

                    this.setState(() => ({
                        searchResults: computerSearchResults
                    }));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    render() {
        const { searchQuery, searchResults } = this.state;
        let searchResultsMap;

        if (searchQuery.length) {
            searchResultsMap =
                searchResults && searchResults.length > 0 ? (
                    searchResults.map((book) => (
                        <BookShelfItem
                            book={book}
                            updateBook={this.props.updateBook}
                            key={book.id}
                        />
                    ))
                ) : (
                    <p>Your search did not return any results</p>
                );
        } else {
            searchResultsMap = (
                <p>
                    Please enter your search terms above and the results will appear here
                </p>
            );
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        {" "}
                        Close{" "}
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={searchQuery}
                            onChange={(query) => this.submitSearchQuery(query.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">{searchResultsMap}</ol>
                </div>
            </div>
        );
    }
}
