import React from 'react';

import 'styles/FirstPage.styl';


const FrontPage = React.createClass({
  getInitialState() {
    return {showHello: true};
  },

  toggleShowHello() {
    this.setState({showHello: !this.state.showHello});
  },

  render() {
    return (
      <div id="FirstPage">
        <h1>FirstPage</h1>

        <button onClick={this.toggleShowHello} className="toggle-button">
          toggle hello
        </button>

        {this.state.showHello && (
          <p ref="helloWorld">Hello world</p>
        )}
      </div>
    );
  }
});

export default FrontPage;
