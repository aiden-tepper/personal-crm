import React from 'react';
import Contacts from './contacts';
import CreateContacts from './create-contact';
import ContactView from './view-contact';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  // componentDidMount() {
  //   this.intervalID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }
  // componentWillUnmount() {
  //   clearInterval(this.intervalID);
  // }
  //
  // tick() {
  //   this.setState({
  //     time: new Date().toLocaleString()
  //   });
  // }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mt-5">Add new contact</h1>
            <p className="lead">Add a new contact</p>
          </div>
          <div className="col-lg-6">
            <h1 className="mt-5">Contacts Listing</h1>
            <p className="lead">List of your contacts in your directory</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
