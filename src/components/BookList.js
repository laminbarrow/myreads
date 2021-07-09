import React, {Component} from "react"
import BookShelf from "./BookShelf"
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'

export default class BookList extends Component{
  state = {
    books: []
  }

  getBooks(){
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    }).catch(err => { console.log(err) })
  }

  componentDidMount(){
    this.getBooks()
  }
    
  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf)
      .then((book) => {
        this.getBooks()
      })
  }

    render(){
        const { books } = this.state;

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
                  <BookShelf title="Currently Reading" books={listBooksByShelfName("currentlyReading")} updateBook={this.updateBook} />
                  <BookShelf title="Want to Read" books={listBooksByShelfName("wantToRead")} updateBook={this.updateBook} />
                  <BookShelf title="Read" books={listBooksByShelfName("read")} updateBook={this.updateBook} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" className='add-contact'> Add a book </Link>
            </div>
          </div>
        )
    }
}
