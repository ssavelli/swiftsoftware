'use strict';
import React from 'react';

var PageHeading = React.createClass({
  render: function() {
    return (
      <div id="top" className="video-container">
        <div className="video-overlay" >
          <h1>{this.props.mainHeading}</h1>
          <div className="smallSpacer"/>
          {this._getSubHeading()}
          <a href="#content">
            <img src="./client/images/DownArrow.png" />
          </a>
        </div>
      </div>
    );
  },
  _getSubHeading: function() {
    if (this.props.subHeading) {
      return (
        <span>
          {this.props.subHeading}
          <div className="smallSpacer"/>
        </span>
      );
    }

    return '';
  }
});

export default PageHeading;
