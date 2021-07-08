import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from "./components/BookList"
import SearchBar from "./pages/SearchPage"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
          <Switch>
            <Route exact path="/" render={() => <BookList books={this.state.books}  />} />
            <Route path='/search' render={({ history }) => (
              <SearchBar onAddBook={(book) => {
                this.addBook(book)
                history.push('/')
              }} />
            )} />
            <Route path="*">
              <h1>Not found</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
