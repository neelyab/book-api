import React, {Component} from 'react';
import Book from '../Book/Book';

class BookList extends Component {
    render() {
        const books = this.props.books.items.map((book, key)=> 
        <Book 
        title={book.volumeInfo.title} 
        key={key}
        link={book.selfLink}
        author={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
        />)
        return(
            <div className="book-container">
                <ul>
            {books}
            </ul>
            </div>
        )
    }
}
export default BookList