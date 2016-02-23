'use strict';
const React = require('react');
const Link = require('react-router').Link;
const classNames = require('classnames');

var NavBarItem = React.createClass({
  render: function() {
    var listItemClasses = classNames({
      'active': this.props.selected
    });

    return (
      <li className={listItemClasses}><Link to={this.props.url}>{this.props.text}</Link></li>
    );
  }
});

module.exports = NavBarItem;