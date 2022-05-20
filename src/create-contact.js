import React from 'react';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {items:this.props.contacts};
  }

  handleSubmit(event) {
    
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Contact Name</label>
          <input name="name" type="text" className="form-control" placeholder="Enter contact name" required/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="text" className="form-control" placeholder="Enter contact email" required/>
        </div>
        <button type="submit" className="btn btn-primary>">Save contact</button>
      </form>
    );
  }
}

export default Contacts;
