'use strict';
import React from 'react';
import { Link } from 'react-router';
import MainStore from '../../data/stores/MainStore.js'

var NavBarItem = React.createClass({

  getInitialState: function() {
    return {
      selected: MainStore.getCurrentPage() === this.props.name
    };
  },

  componentDidMount: function() {
    MainStore.addChangeListener(this.onPageChanged);
  },

  componentWillUnmount: function() {
    MainStore.removeChangeListener(this.onPageChanged);
  },

  getClassName: function() {
    return this.state.selected ? 'active' : '';
  },

  onPageChanged: function() {
    this.setState({
      selected: MainStore.getCurrentPage() === this.props.name
    });
  },

  render: function() {
    return (
      <li className={this.getClassName()}><Link to={this.props.url}>{this.props.text}</Link></li>
    );
  }
});

export default NavBarItem;
