import React, {Component} from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Filters from '../Filters/Filters';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            query: '',
            printType: 'all',
            bookType: 'partial',
        };
    }
    searchChanged(query){
        this.setState({
            query
        });
    }
    printTypeChanged(printType){
        this.setState({
            printType
        });
    }
    bookTypeChanged(bookType){
        this.setState({
            bookType
        });
    }
    render() {
    return (
        <form 
        className="search-form"
        onSubmit={e=>this.props.handleSearch(e, this.state)}>
            <SearchBox 
            handleSearch={q=>this.searchChanged(q)}
            query={this.state.query}
            />
            <Filters 
            handlePrintType={e=>this.printTypeChanged(e)}
            handleBookType={e=>this.bookTypeChanged(e)}
            printType={this.state.printType}
            bookType={this.state.bookType}
            />
        </form>
     ) 
    }
}
export default SearchBar;