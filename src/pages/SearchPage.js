import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookShelfItem from "../components/BookShelfItem"

export default class SearchBar extends Component {
    state = {
        searchQuery: '',
        searchResults: []
    }

    submitSearchQuery(query){
        //set query state
        this.setState(() => ({
            searchQuery: query.trim()
        }))

        //make sure that we have at-least characters in the 
        //search value before sending the search query

        if(query.length >= 3){
            BooksAPI.search(this.state.searchQuery).then((searchResults) => {
                this.setState(() => ({
                    searchResults
                }))
              }).catch(err => { console.log(err) })
        }
    }
    render() {

        const {searchQuery,searchResults} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close </Link>
                    <div className="search-books-input-wrapper">
                        {
                            /*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */
                        }
                        <input type="text" placeholder="Search by title or author" 
                            value={searchQuery} 
                            onChange={(query) => this.submitSearchQuery(query.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                          searchResults && 
                          searchResults.map((book) => <BookShelfItem 
                            title={book.title} 
                            authors={book.authors} 
                            thumbnail={book.imageLinks['thumbnail']}
                            key={book.id} />
                            ) 
                        }
                    </ol>
                </div>
            </div>
        )
    }
}