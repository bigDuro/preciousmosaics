import React from 'react';
import './index.scss';

class UserPanel extends React.Component {
  constructor(props) {
    super();
    this.state = {
      authenticated: true
    }
  }

  loggedInPanel = () => {
    return (
      <div className="User__Panel ">
        <p className="User__Panel__UserName">Welcome, Darryl</p>
        <a href="#" className="User__Panel__Button">Logout <i class="User__Panel__Button__icon fas fa-user"></i></a>
      </div>
    )
  }

  loggedOutPanel = () => {
    return (
      <div className="User__Panel ">
        <a href="#" className="User__Panel__Button">Login <i class="User__Panel__Button__icon far fa-user"></i></a>
      </div>
    )
  }

  render() {
    return (
      <div className="User">
        {this.state.authenticated ? this.loggedInPanel() : this.loggedOutPanel()}
      </div>

    );
  }
}

export default UserPanel;
