import Contact from './Contact';
import { Consumer } from './Context';
import React, { Component, Fragment } from 'react';

class ContactList extends Component{
  render(){
    return (
      <Consumer>
        { value => {
          const { contacts } = value;

          return (
            <Fragment>
			  <h1 className='mt-3'> <span className='text-danger'>Contact</span> List </h1>
              {
				contacts.map(
					contact => <Contact key={ contact.id } contact={contact} />
				)
			  }	
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}


export default ContactList;
