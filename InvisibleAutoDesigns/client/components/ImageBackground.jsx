'use strict';
import React from 'react';

var ImageBackground = React.createClass({
  
  render: function() {
    var backgroundStyle = {
      background: 'url(' + this.props.imageSource + ') no-repeat left 10% fixed',
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover'
    };

    return (
      <div>
        <div className="fullscreenBackground" style={ backgroundStyle }/>
        {this.props.children}
      </div>
    );
  }
});

export default ImageBackground;
