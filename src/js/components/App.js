import React from 'react';
import { RouteHandler } from 'react-router';
import { Link } from 'react-router';

import logo from 'images/logo.svg';


let App = React.createClass({
  render() {
    return (
      <div>
        <div>
          <img className="logo" src={logo} />
        </div>

        <div className="navigation">
          <Link to='first'>First page</Link>
          <Link to='second'>Second page</Link>
        </div>

        <RouteHandler />
      </div>
    );
  }
});

export default App;
