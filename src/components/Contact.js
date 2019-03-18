import React, { Component } from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';

class Contact extends Component{
  constructor(){
    super();
    
    this.state = {
      display: false
    };
  }

  onDisplayInfo = event => {
    this.setState({ display: !this.state.display });
    event.preventDefault();
  };

  onRemoveContact = (dispatch, id) => {
	fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'DELETE'})
	.then( response => {
		dispatch({type: 'DELETE_CONTACT', payload: id}); 	
		console.log(response);
		})
	.catch( error => console.error(error));

  };

  onEditContact = (dispatch, id) => {
	
  }; 

  render() {
    let {display} = this.state;
    const {id, name, phone, email} = this.props.contact;

    return (
      <Consumer>
		  { value => {
          
          const { dispatch } = value;          

	      return (
		  <div className='card mt-3 mb-3'>
			<div className='card-body'>
			  <h5 className='card-title'>
				<i className='fas fa-caret-down' onClick={ this.onDisplayInfo }></i> 
				{name}
				<i className='fas fa-cog' onClick={ this.onEditContact.bind(this, dispatch, id) }></i>
				<i className='fas fa-times' onClick={ this.onRemoveContact.bind(this, dispatch, id) }></i>
			  </h5>
			  
			  {(
				display ? 
				<ul className='list-group'>
				  <li className='list-group-item'>
					Phone: {phone}
				  </li>
				  <li className='list-group-item'>
				    Email: {email}
				  </li>
				</ul> :
				null
			  )}
			</div>
		  </div> 
		  );
      }}
      </Consumer>  
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;
