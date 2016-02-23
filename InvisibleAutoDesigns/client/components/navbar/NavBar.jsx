'use strict';
const React = require('react');

const NavBarItem = require('./NavBarItem.jsx');

var NavBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
					<NavBarItem selected={this._getSelectedItemName() === "home"} url="/" text="Home"/>
					<NavBarItem selected={this._getSelectedItemName() === "products"} url="/products" text="Products"/>
					<NavBarItem selected={this._getSelectedItemName() === "faq"} url="/faq" text="FAQ"/>
					<NavBarItem selected={this._getSelectedItemName() === "aboutUs"} url="/about-us" text="About Us"/>
                    <li>&nbsp;&nbsp;</li>
                </ul>
            </div>
        </div>
	</div>
    );
  },
  _getSelectedItemName() {
	if (this.context.router.isActive('/products')) {
		return 'products';
	}
	else if (this.context.router.isActive('/faq')) {
		return 'faq';
	}
	else if (this.context.router.isActive('/about-us')) {
		return 'aboutUs';
	}
	else {
		return 'home';
	}
  }
});

module.exports = NavBar;