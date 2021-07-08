import React, { Component } from 'react'
import BookShelfItem from './BookShelfItem'

export default class BookShelf extends Component {

    render() {
        const  {title, shelfBooks}= this.props;
        
        return (
            <>
                {
                    shelfBooks.length > 0 &&
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    shelfBooks.map((book) => <BookShelfItem 
                                                    title={book.title} 
                                                    authors={book.authors} 
                                                    thumbnail={book.imageLinks['thumbnail']}
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