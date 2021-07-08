import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from "./components/BookList"
import SearchBar from "./components/SearcBar"
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    }).catch(err => { console.log(err) })
  }

  addBook = (book, shelf) => {
    BooksAPI.update(book,shelf)
      .then((book) => {
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
      })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => (
              <BookList books={this.state.books}  />
          )} />
          <Route path='/search' render={({ history }) => (
            <SearchBar onAddBook={(book) => {
              this.addBook(book)
              history.push('/')
            }} />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
