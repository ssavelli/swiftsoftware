'use strict';
import React from 'react';
import NavBarItem from './NavBarItem.jsx';

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-fixed-top navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navbar-offcanvas" data-canvas="body">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Invisible Auto Designs</a>
          </div>
          <div className="navbar-offcanvas offcanvas">
            <a className="navmenu-brand" href="#">Project name</a>
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
