'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';

import Index from './pages/Index.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import FAQ from './pages/FAQ.jsx';
import AboutUs from './pages/AboutUs.jsx';

import PageChangedActionCreator from './data/actions/PageChangedActionCreator.js';

var Routes = React.createClass({

  onRouteEnter : function(nextState) {
    if (nextState && nextState.routes && nextState.routes.length > 0) {
      var currentRoute = nextState.routes[nextState.routes.length - 1];
      PageChangedActionCreator(currentRoute.name);
    }
  },

  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index} >
          <IndexRoute name="home" component={Home} onEnter={this.onRouteEnter} />
          <Route name="products" path="/products" component={Products} onEnter={this.onRouteEnter} />
          <Route name="faq" path="/faq" component={FAQ} onEnter={this.onRouteEnter} />
          <Route name="aboutUs" path="/about-us" component={AboutUs} onEnter={this.onRouteEnter} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(
  React.createElement(Routes),
  document.getElementById('root'));
