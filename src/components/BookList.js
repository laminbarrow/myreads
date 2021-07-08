import React, {Component} from "react"
import BookShelf from "./BookShelf"

export default class BookList extends Component{
    
    render(){
        const {toggleShowSearchPage, books} = this.props;

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
                { console.log(listBooksByShelfName("currentlyReading"))}
                  <BookShelf title="Currently Reading" shelfBooks={listBooksByShelfName("currentlyReading")} />
                  <BookShelf title="Want to Read" shelfBooks={listBooksByShelfName("wantToRead")}/>
                  <BookShelf title="Read" shelfBooks={listBooksByShelfName("read")} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={toggleShowSearchPage}>Add a book</button>
            </div>
          </div>
        )
    }
}
