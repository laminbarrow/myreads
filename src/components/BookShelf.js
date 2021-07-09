import React, { Component } from 'react'
import BookShelfItem from './BookShelfItem'

export default class BookShelf extends Component {

    render() {
        const  {title, books, updateBook}= this.props;
        
        return (
            <>
                {
                    books.length > 0 &&
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    
                                    books.map((book) => <BookShelfItem 
                                                    book={book} 
                                                    updateBook={updateBook}
                                                    key={book.id} />
                                    ) 
                                }
                            </ol>
                        </div>
                    </div>
                }
            </>
        )
    }
}