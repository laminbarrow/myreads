import React, { Component } from 'react'
import BookShelfItemChanger from "../components/BookShelfItemChanger"

export default class BookShelfItem extends Component {
    render() {
        const {title, authors, thumbnail} = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" 
                        style={{ width: 128, 
                                    height: 193, 
                                    backgroundImage: `url(${thumbnail})` 
                                }}></div>
                        <BookShelfItemChanger />
                    </div>
                    <div className="book-title">{title}</div>
                   
                    <div className="book-authors">
                        {
                            authors.join(', ')
                        }
                    </div>
                    
                  
                </div>
            </li>
        )
    }
}