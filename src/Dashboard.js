import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <div className="link-wrap">
            <Link className="links" to="/dashboard">Browse</Link> {/* competency 42E */}
            <Link className="links"  to="/cart">Cart</Link>
            <Link className="links"  to="/myshelf">MyShelf</Link>
          </div>
          <div>
            <button>logout</button>
          </div>
        </nav>
      </div>
    );
  }
}