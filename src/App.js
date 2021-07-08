import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from "./components/BookList"
import SearchBar from "./components/SearcBar"
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    //booksLoaded: false,
    books: []
  }

  toggleShowSearchPage = () => {
    this.setState({
      showSearchPage: !this.state.showSearchPage
    })
  }
  

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => ({
        //booksLoaded: true,
        books: books
      }))
    }).catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showSearchPage ?
          <SearchBar toggleShowSearchPage={this.toggleShowSearchPage} /> :
          <BookList books={this.state.books} toggleShowSearchPage={this.toggleShowSearchPage} />
        }
      </div>
    )
  }
}

export default BooksApp
