'use strict';
import React from 'react';

var VideoBackground = React.createClass({
  render: function() {
    return (
      <div>
        <video autoPlay loop muted className="video-background">
          <source src={this.props.imageSource} type="video/mp4"/>
        </video>        
		    {this.props.children}
      </div>
    );
  }
});

export default VideoBackground;
