import React from 'react'
import BookList from "./components/BookList"
import SearchBar from "./pages/SearchPage"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async getBooks() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getBooks()).catch((err) => {
      console.log(err);
  });
  }

  componentDidMount() {
    this.getBooks().catch((err) => {
      console.log(err);
  });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <BookList books={this.state.books} updateBook={this.updateBook} />
            </Route>
            <Route path='/search'>
              <SearchBar books={this.state.books} updateBook={this.updateBook} />
            </Route>
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
