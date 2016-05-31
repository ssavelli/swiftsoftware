'use strict';
import React from 'react';

var PageHeading = React.createClass({
  render: function() {
    return (
      <div id="top" className="video-container">
         <div className="video-overlay" >
           <h1>{this.props.mainHeading}</h1>
           <br/>
           <br/>
           {this.props.subHeading}
           <br/>
           <br/>
           <a href="#content">
             <img src="./client/images/DownArrow.png" />
           </a>
         </div>
     </div>
    );
  }
});

export default PageHeading;
