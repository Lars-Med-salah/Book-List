import React from 'react';
const ListBooks = (props) => {
      const {Books , removeBook} = props;
      const BooksList = 
      Books.length === 0 ? (<p className="No-item"> this is No Books </p>) 
      :  ( Books.map(book =>
            <li className="Book" key = {book.id} onClick={()=>removeBook(book.id)}>
                <h3> {book.title}</h3>
                <p> {book.auther}</p>
            </li>)
        );

    return ( 
        <ul className="List">
            {BooksList}      
        </ul>
     );
}
 
export default ListBooks;