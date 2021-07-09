import React, { Component } from 'react'

export default class BookShelfItem extends Component {
    state = {
        currentValue: ''
    }

    componentDidMount(){
        this.setState({
            currentValue: this.props.book.shelf
        })
    }

    handleUpdateBook(book, value){
          this.setState(() => ({
            currentValue: value
        }))

        this.props.updateBook(book, value)
    }

    render() {
        const {book} = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" 
                        style={{ width: 128, 
                                    height: 193,
                                    background: book.imageLinks ?  `url(${book.imageLinks['thumbnail']})` : '#ccc'
                                }}></div>
                         <div className="book-shelf-changer">
                            <select value={this.state.currentValue} 
                            onChange={(event) => this.handleUpdateBook(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                   
                    <div className="book-authors">
                        {
                            book.authors.join(', ')
                        }
                    </div>
                    
                  
                </div>
            </li>
        )
    }
}