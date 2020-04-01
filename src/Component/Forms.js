import React, { Component } from 'react';

class Forms extends Component {
    state = { 
        title : '',
        auther :''
     }
     hundelSubmit = (e) =>{
         e.preventDefault();
         this.props.addBook(this.state.title, this.state.auther);
         this.setState({title : '', auther :''});
     }

     hundelchanged =(e)=>{
         this.setState({[e.target.name] : e.target.value });
     }
     
    render() { 
        return ( 
            <form className="Forms" onSubmit={this.hundelSubmit}>
                <input type="text" placeholder="your Book ..."   name='title' onChange={this.hundelchanged} value={this.state.title} required/>
                <input type="text" placeholder="your auther ..."  name='auther' onChange={this.hundelchanged} value={this.state.auther} required/>
                <input type="submit" value='AddBooks' />
            </form>
         );
    }
}
 
export default Forms;