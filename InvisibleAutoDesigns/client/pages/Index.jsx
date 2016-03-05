'use strict';
import React from 'react';
import NavBar from '../components/navbar/NavBar.jsx';

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

export default IndexPage;
