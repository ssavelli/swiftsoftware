'use strict';
import React from 'react';
import NavBar from '../components/navbar/NavBar.jsx';

var IndexPage = React.createClass({
  render: function() {
    return (
      <div>
    		<NavBar />
		    {this.props.children}

        <div className="container-fluid footer">
          <div className="smallSpacer"/>
          <a href="#top">
            <img src="./client/images/UpArrow.png" />
          </a>
          <div className="smallSpacer"/>
          <div className="row">
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
          </div>
          <div className="smallSpacer"/>
        </div>
      </div>
    );
  }
});

export default IndexPage;
