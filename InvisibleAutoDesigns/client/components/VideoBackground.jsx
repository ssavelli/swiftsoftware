'use strict';
import React from 'react';

var VideoBackground = React.createClass({
  render: function() {
    return (
      <div>
        <video autoPlay loop muted className="fullscreen" preload="none" poster={this.props.loadingPoster} >
          <source src={this.props.videoSource} type="video/mp4" />
          <img className="fullscreen" src={this.props.fallbackImageSource} title="Your browser does not support the video tag" />
        </video>
        {this.props.children}
      </div>
    );
  }
});

export default VideoBackground;
