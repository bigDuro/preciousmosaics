import React from 'react';
import './index.scss';

class UserPanel extends React.Component {
  constructor(props) {
    super();
    this.state = {
      authenticated: false,
      showLoginForm: false,
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  handleLoginForm = (e) => {
    e.preventDefault();
    this.setState({
      showLoginForm: true
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    // TODO: add authentication method
    this.setState({
      authenticated: true,
      showLoginForm: false,
      user: {
        name: 'Darryl'
      }
    })
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      authenticated: false,
      user: {
        name: '',
        email: ''
      }
    })
  }

  validateEmail = (e) => {
    this.setState({
      user: {
        email: e.target.value
      }
    })
  }

  validatePassword = (e) => {

    this.setState({
      user: {
        ...this.state.user,
        password: e.target.value
      }
    })
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      showLoginForm: false
    })
  }

  renderForm = () => {
    return (
      <form className="User__Panel__form" onSubmit={this.handleLogin}>
        <div className="User__Panel__form__cancel">
          <a href="/" onClick={this.handleCancel}>
            <i className="User__Panel__Button__icon far fa-times-circle"></i>
          </a>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange={this.validateEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={this.validatePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.user.email || !this.state.user.password}>Submit</button>
      </form>
    )
  }
  loggedInPanel = () => {
    return (
      <div className="User__Panel">
        <p className="User__Panel__UserName">Welcome, {this.state.user.name} </p>
        <a href="/" onClick={this.handleLogout} className="User__Panel__Button">Logout <i className="User__Panel__Button__icon fas fa-user"></i></a>
      </div>
    )
  }

  loggedOutPanel = () => {
    return (
      <div className="User__Panel ">
        {!this.state.showLoginForm ? <a href="/" onClick={this.handleLoginForm} className="User__Panel__Button">Login <i className="User__Panel__Button__icon far fa-user"></i></a> : this.renderForm()}
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
