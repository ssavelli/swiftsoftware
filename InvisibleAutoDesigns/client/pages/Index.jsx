'use strict';
const React = require('react');

const NavBar = require('../components/navbar/NavBar.jsx');

var IndexPage = React.createClass({
  render: function() {
    return (
      <div>
		<NavBar />
		<br/>
		<br/>
		<br/>
		<br/>
        Index <br/>
		{this.props.children}
      </div>
    );
  }
});

module.exports = IndexPage;

