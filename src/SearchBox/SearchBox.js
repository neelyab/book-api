import React, {Component} from 'react';

class SearchBox extends Component {
        render() {
        return (
                <div className="search-container">
                    <label htmlFor="search-bar">Search:</label>
                        <input 
                        name="search-bar" 
                        id="search-bar" 
                        placeholder="henry" 
                        type="text"
                        value={this.props.query}
                        onChange={e=>this.props.handleSearch(e.target.value)}
                        ></input>
                        <button 
                        type="submit" 
                        name="search"
                        >Search</button>
                </div>
        )
    }
}
export default SearchBox;