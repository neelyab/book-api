import React, {Component} from 'react';

class Filters extends Component {
    render() {
        return( 
            <div className="filters-container">
                    <div>
                        <label htmlFor="print-type">Book Type:</label>
                            <select 
                            value={this.props.bookType} 
                            id="print-type"
                            onChange={e=>this.props.handleBookType(e.target.value)}
                            >
                                <option value="partial">Partial Preview</option>
                                <option value="full">Full Books</option>
                                <option value="free-ebooks">Free E-books</option>
                                <option value="paid-ebooks">Paid E-Books</option>
                                <option value="ebooks">All E-Books</option>
                            </select>
                    </div>
                    <div>
                        <label htmlFor="book-type">Print Type:</label>
                        <select 
                        value={this.props.printType}
                        onChange={e=>this.props.handlePrintType(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                    </div>
                </div>
        )
    }
}
export default Filters;