import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { login } from './redux/ducks/reducer';

class Login extends Component {
  // competency 36I
  constructor() {
    super();
    this.state = {
      userInput: '',
      passInput: ''
    }
  }
  // competency 39C
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push('/dashboard');
    }
  }

  register = () => {
    const username = this.state.userInput // competency 36C
    const password = this.state.passInput
    // console.log(username);
    // console.log(password);
    axios.post('/register', { // competency 44C
      username,
      password
    }).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  login = () => {
    const username = this.state.userInput
    const password = this.state.passInput
    axios.post('/login', {
      username,
      password
    }).then(response => {
      // competency 104C
      console.log(response);
      console.log(this.props);
      this.props.login(response.data.user)
      console.log(this.props);
      this.props.history.push('/dashboard');
    }).catch(error => { // competency 104D
      console.log(error);
    })
  }

  render() {
    return (
      <div className="admin-main">
          <div className="admin-input-div">
            <div>
              <input className="input-data-field" placeholder="username" ref="username" onChange={ (e) => this.setState({ userInput: e.target.value }) } />
            </div>

            <div>
              <input className="input-data-field"  placeholder="password" type="password" ref="password" onChange={ (e) => this.setState({ passInput: e.target.value }) } /> {/* competency 36D */} {/* competency 36G */}
            </div>

            <div className="submit-btns-container">
              <button className="submit-btn" onClick={ this.register }>register</button> {/* competency 36J */}
              <button className="submit-btn" onClick={ this.login }>sign in</button>
            </div>
          </div>
      </div>
    );
  }
}

// competency 43H
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// competency 43J
const mapDispatchToProps = {
  login: login
}

// competency 43C
export default connect(mapStateToProps, mapDispatchToProps)(Login);
