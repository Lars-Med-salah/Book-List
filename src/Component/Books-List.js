import React, { Component } from 'react';
import Headers from './Header';
import ListBooks from './List-Book';
import Forms from './Forms';

class BooksList extends Component {
    state = { 
       Books : [
           {title :'React.js' , auther:'Facebook' , id :1},
           {title :'angular.js' , auther:'Google' , id :2}
       ]
     }

     addBook = (title , auther) =>{
        const count = this.state.Books.length + 1;
        const Books = [...this.state.Books ,{title : title , auther : auther , id : count }];
        this.setState({Books});
      }
    
       removeBook = (id)=>{
        const Books = this.state.Books.filter(
          book => book.id !== id );
        this.setState({Books});
      }
    
    render() { 
        return (  
            <div className="Books-List">
             <Headers Books = {this.state.Books}/>
             <ListBooks Books = {this.state.Books} removeBook = {this.removeBook} />
             <Forms addBook={this.addBook}/>
            </div>
        );
    }
}
 
export default BooksList;