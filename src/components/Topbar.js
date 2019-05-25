import React from 'react';
import { withRouter, BrowserRouter as Router, Link } from "react-router-dom";

function Topbar(props) {
  const { location: { pathname } } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/test" className="navbar-brand"><i className="fas fa-home"></i></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={(pathname === '/test') ? 'nav-item active' : 'nav-item'}>
            <Link to="/test" className="nav-link">Home</Link>
          </li>
          <li className={(pathname === '/test/function-find-value') ? 'nav-item active' : 'nav-item'}>
            <Link to="/test/function-find-value" className="nav-link">Function for finding X, Y, Z value</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Topbar)
