﻿'use strict';
import React from 'react';
import NavBarItem from './NavBarItem.jsx';

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-fixed-top navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-content" aria-expanded="false">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Invisible Auto Designs</a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-collapse-content">
            <ul className="nav navbar-nav navbar-right">
              <NavBarItem name="home" url="/" text="Home"/>
              <NavBarItem name="products" url="/products" text="Products"/>
              <NavBarItem name="faq" url="/faq" text="FAQ"/>
              <NavBarItem name="aboutUs" url="/about-us" text="About Us"/>
              <li>&nbsp;&nbsp;</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

export default NavBar;
