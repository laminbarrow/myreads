import React, {Component} from "react"
import BookShelf from "./BookShelf"
import { Link } from 'react-router-dom';


export default class BookList extends Component{
    
    render(){
        const { books } = this.props;

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
                  <BookShelf title="Currently Reading" shelfBooks={listBooksByShelfName("currentlyReading")} />
                  <BookShelf title="Want to Read" shelfBooks={listBooksByShelfName("wantToRead")}/>
                  <BookShelf title="Read" shelfBooks={listBooksByShelfName("read")} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" className='add-contact'> Add a book </Link>
            </div>
          </div>
        )
    }
}
