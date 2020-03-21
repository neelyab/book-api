import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <li className="book">
                <h2><a href={this.props.link}>{this.props.title}</a></h2>
                <h3>{this.props.author}</h3>
                <p>{this.props.description}</p>
                <img src={this.props.image} alt={this.props.title}/>
            </li>
        )
    }
}
export default Book;