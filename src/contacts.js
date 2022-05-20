import React from 'react';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items:this.props.contacts};
  }

  render() {
    return(
      <div className="container">
        <ul className="list-group">
          {this.state.items.map(listitem => (
            <li className="list-group-item">
              <span>{listitem.name + " | " + listitem.email}</span>
              <button className="btn btn-primary btn-sm float-right">Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
