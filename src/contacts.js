import React from 'react';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items:this.props.contacts};
    this.getContacts();
  }

}

export default Contacts;
