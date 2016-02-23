'use strict';
const React = require('react');

const NavBar = require('../components/navbar/NavBar.jsx');

var HomePage = React.createClass({
  render: function() {
	var videoStyle = {
	  background: 'url(./client/images/StaticBackground.png) no-repeat'
	};

    return (
      <div>
        <video autoPlay loop muted className="video-background" style={videoStyle}>
			<source src="http://advancedautomotivefilm.com/wp-content/uploads/2015/03/film-application-teaser.mp4" type="video/mp4"/>
		</video>
      </div>
    );
  }
});

module.exports = HomePage;

