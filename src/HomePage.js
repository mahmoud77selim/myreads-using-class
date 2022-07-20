import React from "react";
import './MyReads.css';
import Shelf from './Shelf'
import {Link} from "react-router-dom";
import * as API from './BooksAPI'

class HomePage extends React.Component {state = {currentlyReading: [],wantToRead: [],read: [], }

  componentDidMount(){
    API.getAll().then(books => {
      let currentlyReading = []
      let wantToRead = []
      let read = []
      books.forEach(book => {
        if(book.shelf === "currentlyReading"){
          currentlyReading.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
        if(book.shelf === "wantToRead"){
          wantToRead.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
        if(book.shelf === "read"){
          read.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks && book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
      })
      this.setState({currentlyReading, wantToRead, read})
    })
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">MyReads</h1>
        <div className="container home">
          <Shelf title="Currently Reading" books={this.state.currentlyReading} />
          <Shelf title="Want to Read" books={this.state.wantToRead} />
          <Shelf title="Have Read" books={this.state.read} />
          <Link to="/search" className="search-link">+</Link>
        </div>
      </React.Fragment>
    );
  }
  static defaultProps = {
    reading: [{
      id: 1,
      title: 'Book title 01',
      image: { src: "http://placekitten.com/200/300", alt: "It's cat" },
      authors: ['autor 01', 'autor 2']
    },
    {
      id: 2,
      title: 'Book title 02',
      image: { src: "http://placekitten.com/200/300", alt: "It's cat" },
      authors: ['autor 01', 'autor 2']
    },
    {
      id: 3,
      title: 'Book title 03',
      image: { src: "http://placekitten.com/200/300", alt: "It's cat" },
      authors: ['autor 01', 'autor 2']
    }]
  }
}
export default HomePage;
