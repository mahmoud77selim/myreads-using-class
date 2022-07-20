import React from 'react'
import PropTypes from 'prop-types'
import './MyReads.css';
import * as API from './BooksAPI'


const ShelfChanger = ({value = 'none', bookId}) => {
    function handlerChangeSelect(e){
        API.update({id:bookId}, e.target.value).then(() => window.location.reload())
    }
    return <div className="shelf-changer">
        <select value={value} onChange={handlerChangeSelect}>
            <option value="none" disabled>Move To...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Have Read</option>
            <option value="none">None</option>
        </select>
    </div>
}
ShelfChanger.propTypes = {
    value: PropTypes.string
}
export default ShelfChanger
