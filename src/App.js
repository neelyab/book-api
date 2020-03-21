import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';

const key ='AIzaSyAJviY2cABNVjt30zCeJ9dhkWvYyipD7mk';
function formatQuery(search){
  return `https://www.googleapis.com/books/v1/volumes?q=${search.query}&printType=${search.printType}&filter=${search.bookType}&key=${key}`;

}
class App extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      bookList: {
        items: []
      },
      error: null
    }
  }
  handleSearch(e, query) {
    e.preventDefault();
    console.log(query);
    const url= formatQuery(query);
    console.log(url);
    
    
    fetch(url)
    .then(response=> {
      if (!response.ok){
        throw new Error('Something went wrong, please try again');
      }
      return response;
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data);
      this.setState({
        bookList: data,
        error: null
      });
    })
    .catch(err=> {
      this.setState({
        error: err.message
      });
    });
  }

  render(){
  
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";
    return (
      <main className='App'>
        <header>Google Book Search</header>
        <SearchBar handleSearch={this.handleSearch}/>
        {error}
        <BookList books={this.state.bookList}/>
      </main>
    );
  }
}

export default App;