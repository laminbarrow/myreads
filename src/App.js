import React from 'react'
import BookList from "./components/BookList"
import SearchBar from "./pages/SearchPage"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <BookList />} />
            <Route path='/search' render={() => <SearchBar />} />
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
